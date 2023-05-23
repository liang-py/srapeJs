import json
import gzip
import requests

url = "http://218.2.234.219:10491/formservice?service=openDataSet&_pid=tFnSmNtkCcuV_S12L785QGM5E9lDbalEZRPseOIrbZ4JRLJwFn-wYBkt9QYRdQPYVTanatc6JX6ZAqZu8Af5wg&_tranid=6ccec9bc-d716-4b4c-a485-cec6f7f26132&_moduleid=18u8okrne0xnik0i&_action=new&_formid=04zi4rjodt920ox1&_progid=3kz14hjlcr4howjh&_rnd=16826469057517.891347291354853&inflate=true"

payload = '{"openmode":"sql","openparam":"uf_djmx_sql","pageno":1,"pagesize":5000,"formid":"04zi4rjodt920ox1","dataset":"ds_djmx","outstyle":"object","hiddenFields":[],"variables":{"StartDate":"2023-04-01","EndDate":"2023-04-26","billcode":"%","deptid":"","orgid":"","staffid":"","businessid":"","caozy":"","goodsid":"","IsInvoice":"","Director":""}}'
headers = {
  'Accept': '*/*',
  'Accept-Language': 'zh-CN,zh;q=0.9',
  'Cache-Control': 'no-cache',
  'Content-Type': 'text/xml;charset=UTF-8',
  'Cookie': "ucid=cksrEetBukqBzz3lcg_sUw; __qypid=D9RMTdRxp8eMP8v2fts4P_9_BiWjQ24Mzxyvy5q3q_qjXs3Skg5LV1eNQmQ; JSESSIONID=3A6A3FE4C0D43EBF953F2887973B3607; Token=eyJhbGciOiJIUzI1NiJ9.eyJhdXRoIjp7ImF1dGgiOiJ1c2VyIn0sImp0aSI6ImNkNDQxMzEwLWE0NjEtNDZiYy04ZDE1LWExNjUzMGZlMmFlNSIsImlhdCI6MTY4MjY0NDgyMywic3ViIjoie1wiZW50aWRcIjpcIkUzVlBKV0lQSVBJXCIsXCJsZ25uYW1lXCI6XCLmmJPogZRcIixcIm9yZ2lkXCI6XCJPM1ZQSldJUFpXWVwiLFwiZGVwdGlkXCI6XCIwMDAwMDAwMDAwMFwiLFwic3RhZmZpZFwiOlwiSzNaUVJFT0lYWERcIixcInVzZXJpZFwiOlwiVTNaUVJFWlRORVhcIn0iLCJleHAiOjE2ODI3MzEyMjN9.mKUgYyZ6umdvjee1wV5Ro5SPrq-Iy2pxGwtFgSdmGzM",
  # 'Origin': 'http://218.2.234.219:10491',
  'Pragma': 'no-cache',
  'Proxy-Connection': 'keep-alive',
  # 'Referer': 'http://218.2.234.219:10491/3kz14hjlcr4howjh.prog?_pid=n4l3bcYsiPIo6vYlRUihapT3WYK4yW_chuSqsZ-L3uA3kKh-iZyAF9MBmEpsfSbDmYN_5VsGdg5xc47wVEHa7Q&_params=%7B%22md%22%3A%22%E9%94%80%E5%94%AE%E5%87%BA%E5%BA%93%E6%9F%A5%E8%AF%A2%22%7D',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
  'X-Requested-With': 'XMLHttpRequest'
}
payload = gzip.compress(payload.encode())
response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
