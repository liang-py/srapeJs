import requests
import re
import json
from utils.CookieJar import cookies_items
from urllib.parse import urljoin
from pyquery import PyQuery as pq
import execjs


class RuiShu:

    def __init__(self):
        self.headers = {
            # "Host": "www.fangdi.com.cn",
            "Connection": "keep-alive",
            "Cache-Control": "max-age=0",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                          "Chrome/111.0.0.0 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,"
                      "*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Referer": "http://www.fangdi.com.cn/new_house/new_house_detail.html",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9",
        }
        self.session = requests.session()
        self.session.headers = self.headers
        self.content = ''
        self.host = 'http://www.fangdi.com.cn/'
        self.url = 'http://www.fangdi.com.cn/new_house/new_house_detail.html'

    def first_index(self):
        """
        202请求，获取自执行代码
        :return:
        """
        resp = self.session.get(url=self.url)
        # 获取content
        self.content = re.findall(r'<meta content="(.*?)">', resp.text)[0]
        src = re.findall(r'src="(.*?)" r=', resp.text)[0]
        doc = pq(resp.text)
        # 202 自执行代码
        iffe_data = doc.find('script')[1].text
        # js外链
        src_url = urljoin(self.host, src)
        src_data = self.session.get(src_url).text
        # 获取ts和虚拟机代码
        add_js = """   
           // 生成window对象的$_ts
            
            var eval_js = ""
            
            window = {
                $_ts: {},
                // 为什么添加data
                eval: function (data) {
                    eval_js = data
                }
            }
            
            location = {
                "ancestorOrigins": {},
                "href": "http://www.fangdi.com.cn/new_house/new_house_detail.html",
                "origin": "http://www.fangdi.com.cn",
                "protocol": "http:",
                "host": "www.fangdi.com.cn",
                "hostname": "www.fangdi.com.cn",
                "port": "",
                "pathname": "/new_house/new_house_detail.html",
                "search": "",
                "hash": ""
            }
            
            document = {
                "scripts": ["script", "script"]
            }
            function ts(f_js, iffe){
                eval(f_js);
                eval(iffe);
                console.log(window.$_ts)
                return [window.$_ts, eval_js]
            
            }
        """
        ctx = execjs.compile(add_js)
        ts, exec_js = ctx.call('ts', src_data, iffe_data)
        print(ts)
        print(exec_js)
        # 获取20位核心代码的后四位
        ts_4_variable = re.findall(r'\[29\]\]\(\[(.*?)\]\)', exec_js)[0].split(',')
        ts_name = ts_4_variable[0].split('.')[0].split('$')[1]
        # 取开头20个赋值语句
        ts_20_function = re.findall(r'(_\$%s\._\$\S{2}=_\$\S{2};)' % ts_name, exec_js)
        print(ts_4_variable, ts_20_function)
        ts_4_variable_index = []
        for ts_4 in ts_4_variable:
            # 获取ts中的函数名
            func_name = ts[ts_4.split('.')[1]]
            for t in ts_20_function:
                if func_name in t:
                    ts_4_variable_index.append(ts_20_function.index(t))
        print(ts_4_variable_index)
        base_index = ['_$bJ', '_$zr', '_$Sf', '_$B0', '_$pV', '_$Ns', '_$Lm', '_$Ub', '_$pn', '_$Yz', '_$7b', '_$U6', '_$BW', '_$mw', '_$ry', '_$LZ', '_$ZE', '_$9j', '_$25']
        # 替换js执行文件
        with open('../scripts/js/ruishu4/iffe.js', 'r', encoding='utf8') as f:
            f_js = f.read()

        res = cookies_items(self.session.cookies.items())
        print(res)

    def get_cookies(self, content):
        cookies = ''
        return cookies

    def get_index(self):
        cookies = self.get_cookies(self.content)
        resp = self.session.get(self.url)
        if resp.status_code == 200:
            print(resp.text)
        print(cookies)


if __name__ == '__main__':
    rs = RuiShu()
    rs.first_index()
    rs.get_index()
