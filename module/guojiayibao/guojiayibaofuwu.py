import requests
import json
import execjs
import os
import sys

# os.environ['NO_PROXY'] = 'https://fuwu.nhsa.gov.cn'

class FuWu:
    def __init__(self):
        self.sess = requests.session()
        self.headers = {
            "Accept": "application/json",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Cache-Control": "no-cache",
            "channel": "web",
            "Content-Type": "application/json",
            "contentType": "application/x-www-form-urlencoded",
            # "Cookie": "__jsluid_s = b3e9982691f0b4b44a0e51480998f0e7;amap_local = 320100",
            "Host": "fuwu.nhsa.gov.cn",
            "Origin": "https://fuwu.nhsa.gov.cn",
            "Pragma": "no-cache",
            # "Referer": "https://fuwu.nhsa.gov.cn/nationalHallSt/",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        }
        self.cookies = {}
        self.sess.headers = self.headers

    def get_encData(self):
        # with open('../utils/GuoMi_xizang.js', 'r', encoding='utf8') as f:
        #     enc_js = f.read()
        # ctx = execjs.compile(enc_js)
        # headers = ctx.call('getHeader')
        headers = json.loads(requests.get('http://127.0.0.1:3000/GM/Header').text)
        headers['x-tif-timestamp'] = str(headers['x-tif-timestamp'])
        self.headers.update(headers)
        # 生成请求载荷
        data = {"addr": "", "regnCode": "110000", "medinsName": "", "medinsLvCode": "", "medinsTypeCode": "",
                "openElec": "", "pageNum": 1, "pageSize": 10}
        # res = ctx.call('getEnc', data)
        res = requests.post('http://127.0.0.1:3000/GM/encData', headers={"Accept": "application/json"}, data=data)
        encData = json.loads(res.json()['data'])
        encData['data']['data'] = {"encData": encData['data']['encData']}
        encData['data'].pop('encData')
        print(encData)
        print(self.headers)
        return encData

    def get_addr_list(self):
        url = "https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/dic/queryAdmdvsTree"
        res = self.sess.post(url)

        print(res.text)

    def index(self):
        index_url = "https://fuwu.nhsa.gov.cn/nationalHallSt/"
        # index_resp = self.sess.get(index_url, verify=False)
        index_resp = requests.get(index_url, headers=self.headers, verify=False)
        print(index_resp.content.decode(), index_resp.status_code)

    def get_first_page(self):
        url = "https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/CommQuery/queryFixedHospital"
        encData = self.get_encData()
        self.sess.headers = self.headers
        resp = self.sess.post(url, json=encData)
        if resp.status_code == 200:
            print(resp.text)
        print(resp.status_code)


if __name__ == '__main__':
    fuwu = FuWu()
    fuwu.get_first_page()
