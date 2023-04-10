import requests
import re
import time
import execjs
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
}
cookies = {}
url = 'https://www.mps.gov.cn/index.html'


def get_first_html():
    resp = requests.get(url, headers=headers)
    cookies.update(resp.cookies)
    # 第一次521js文件，获取第一次的cookies
    scripts = re.findall('document.cookie=(.*?);location', resp.text)[0]
    res = execjs.eval(scripts).split(';')[0]
    cookies['__jsl_clearance_s'] = res.split('=')[1]
    print(cookies)


def get_go_params():
    resp = requests.get(url, headers=headers, cookies=cookies)
    go_params = re.findall(r'go(.*?)</script>', resp.text)[0]
    # params = json.loads(go_params)
    return go_params


def get_cookie():
    params = get_go_params()
    url = '127.0.0.1:3000/cookie'
    res = requests.get(url, headers=headers, params=params)
    print(res)


def get_html():
    cookies = get_cookie()
    resp = requests.get(url, headers=headers, cookies=cookies)
    print(resp.text)


if __name__ == '__main__':
    get_first_html()
    # get_go_params()
    get_cookie()
