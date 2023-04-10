import requests
import re
import json
from utils.CookieJar import cookies_items
from urllib.parse import urljoin


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
        # 请求js文件
        src_url = urljoin(self.host, src)
        self.session.get(src_url)
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
