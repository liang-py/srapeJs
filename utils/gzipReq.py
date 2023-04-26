#!/usr/bin/env python
import io
import gzip
import json
import requests

url = "http://218.2.234.219:10491/formservice?service=openDataSet&_pid=FmL57KzFXk7Uj6BG0oMsP_NMXrzYilQD51occwn04P382_Bd5D77b7W1Y9wJaqFO-Nj0Eo3o1Vce_mZZz1C0Rg&_tranid=11bec612-ea19-45c3-a328-687709c272a1&_moduleid=18u8okrne0xnik0i&_action=new&_formid=04zi4rjodt920ox1&_progid=3kz14hjlcr4howjh&_rnd=16825086695512.596860128240599&inflate=true"

data = '{"openmode":"sql","openparam":"uf_djmx_sql","pageno":1,"pagesize":500,"formid":"04zi4rjodt920ox1","dataset":"ds_djmx","outstyle":"object","hiddenFields":[],"variables":{"StartDate":"2023-04-01","EndDate":"2023-04-26","billcode":"%","deptid":"","orgid":"","staffid":"","businessid":"","caozy":"","goodsid":"","IsInvoice":"","Director":""}}'

headers = {
    "Host": "218.2.234.219:10491",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "DNT": "1",
    "X-Requested-With": "XMLHttpRequest",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
    "Content-Type": "text/xml;charset=UTF-8",
    "Accept": "*/*",
    # "Origin": "http://218.2.234.219:10491",
    # "Referer": "http://218.2.234.219:10491/3kz14hjlcr4howjh.prog?_pid=y1fGgMFL1nZsKucf9reOB0RziYExkW6rYVIgzCLlFIzKgqoAvnQjwkSh3a1xhlduskvkE7pO8ux2BA_p_XZ5OA&_params=%7B%22md%22%3A%22%E9%94%80%E5%94%AE%E5%87%BA%E5%BA%93%E6%9F%A5%E8%AF%A2%22%7D",
    # "Accept-Encoding": "gzip, deflate",
    "Accept-Encoding": "deflate",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cookie": "JSESSIONID=B1946AC075BAE9541A7D855E804728C2; __qypid=D-luh6qvs5BTRHv8II7-IS-UMhZenOiNM7MynLwtmnURPLrMr29BMRIL5SM; Token=eyJhbGciOiJIUzI1NiJ9.eyJhdXRoIjp7ImF1dGgiOiJ1c2VyIn0sImp0aSI6ImIzYjIyNDgwLTc0ZWYtNDA2OC05YjU3LThlZWJmNWYxYWNkYiIsImlhdCI6MTY4MjUwNDcxOCwic3ViIjoie1wiZW50aWRcIjpcIkUzVlBKV0lQSVBJXCIsXCJkZXB0aWRcIjpcIjAwMDAwMDAwMDAwXCIsXCJsZ25uYW1lXCI6XCLmmJPogZRcIixcIm9yZ2lkXCI6XCJPM1ZQSldJUFpXWVwiLFwic3RhZmZpZFwiOlwiSzNaUVJFT0lYWERcIixcInVzZXJpZFwiOlwiVTNaUVJFWlRORVhcIn0iLCJleHAiOjE2ODI1OTExMTh9.kHzZ4kjphqhZUpbaNE1ul27TPwqDfA_VjXFbR1xK3sI; ucid=y5Q92nI8IEWJb2AIJcJ0eg",
}


def upload_gzip_json():
    gz_buffer = io.BytesIO()
    gz_file = gzip.GzipFile(mode='wb', fileobj=gz_buffer)
    gz_file.write(json.dumps(eval(data)).encode())
    gz_file.close()
    gz_data = gz_buffer.getvalue()
    print(gz_data)

    response = requests.post(url,
                             headers=headers,
                             data=gz_data
                             )
    print(response.text)


def main():
    upload_gzip_json()
    # reqe()


if __name__ == '__main__':
    main()
