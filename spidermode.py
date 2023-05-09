# -*- coding:utf-8 -*-
import requests
import re
import os
import time
import pandas as pd
from lxml import etree
from pyquery import PyQuery as pq


class RequestXpathModel:
    def __init__(self):
        self.headers = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Sec-Ch-Ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
        }
        self.from_data = {}
        self.index_url = ''
        self.detail_url = ''
        self.session = requests.session()
        self.columns_name = ['机构名称', '机构地址', '机构性质', '发证机关', '机构类别', '机构等级', '核准床位', '编号', '略缩图地址', 'lng', 'lat', '官网地址']
        # 表格df
        self.name = os.path.basename(__file__).strip('.py')
        self.dir_name = os.path.dirname(__file__).split('/')[-1]
        result_dir_path = f'D:/WorkProject/results/{self.dir_name}'
        if not os.path.exists(result_dir_path):
            os.makedirs(result_dir_path)
        if os.path.exists(f'D:/WorkProject/results/{self.dir_name}/{self.name}.xlsx'):
            self.result_df = pd.read_excel(f'D:/WorkProject/results/{self.dir_name}/{self.name}.xlsx')
        else:
            self.result_df = pd.DataFrame()
        self.pages = 0
        self.count = 0
        self.proxies = {}

    def __del__(self):
        self.result_df.to_excel(f'D:/WorkProject/results/{self.dir_name}/{self.name}.xlsx', index=False)
        print('保存成功，执行结束')

    @classmethod
    def headers_update(cls):
        expand_headers = {
            'Origin': '',
            'Cookie': '',
            'Referer': '',
        }
        return expand_headers

    def get_proxy(self):
        # 长效代理
        proxy_url = ''
        response = requests.get(url=proxy_url)
        # '{"expiretime":"2023-05-09 18:05:19","ip":"114.106.146.25:60605","name":"安徽池州"}'
        result = response.json()
        # if 'errorfetchinginterfaceinformation' in result['ip']:
        #     print(f'代理返回结果异常：{result["ip"]}')
        #     time.sleep(1)
        #     return self.get_proxy()
        self.proxies = {
            'http': f'http://{result["ip"]}',
            'https': f'http://{result["ip"]}',
        }
        print(f'获取代理，响应结果{response.status_code}，IP值{result["ip"]}，时间{result["expiretime"]}')

    def get_response(self, url, method, **kwargs):
        # 捕获代理导致的异常请求
        count = 0
        try:
            self.count += 1
            # if self.count == 1 or divmod(self.count, 10)[1] == 0:
            #     self.proxies = self.get_proxy()
            time.sleep(0.3)
            if self.proxies:
                response = self.session(url, method=method, headers=self.headers, proxies=self.proxies, **kwargs)
                print('请求响应结果', response.status_code, url)
                return response
            print('获取代理失败')

        except Exception as e:
            count += 1
            print(e)
            time.sleep(0.5)
            if count < 5:
                print(count)
                return self.get_response(url, **kwargs)

    def get_index(self, table):
        """
        传入索引页需要解析的table
        :param table:
        :return: detail_all -> [{}, {}]
        """
        detail_all = []
        tr = table('tr:gt(0)')
        title = table('tr:eq(0)')
        title_list = title('th').text()
        title_list = [th.text.strip() for th in title('th') if th.text]

        for td_list in tr:
            detail = {}
            # if isinstance(td_list, lx)
            td = pq(td_list)
            if len(td('td')) == len(title_list):
                td_detail = []
                # td_list = [t.text().strip() for t in td('td') if t.text()]
                for t in td('td'):
                    t = pq(t)
                    if t.text() and not t('span'):
                        td_detail.append(t.text().strip())
                    elif t('span'):
                        td_detail.append(t('span').attr('title'))
                    else:
                        if t('input'):
                            td_detail.append(t('input').val())
                        else:
                            td_detail.append('')
                for i in range(len(title_list)):
                    detail[title_list[i]] = td_detail[i]
                detail_all.append(detail)
        return detail_all

    def get_detail(self, html):
        # 异常页面处理
        if '审核不通过':
            pass
        # 企业信息
        company_info_key = html.xpath('//div[@id="divCom"]/b/text()')[0]
        company_info = {}
        company_info_tr = html.xpath('//div[@id="divCom"]//tr')
        print(company_info_tr)
        # 获取表格数据
        detail_dict = self.get_table_dict(company_info_tr)

    # 将网页表格转换成字典格式
    def get_table_dict(self, tr_list):
        detail = dict()
        for tr in tr_list:
            th_list = tr.xpath('th//text()')
            th_list = [x.strip('\r\n ：:*') for x in th_list if x.strip('\r\n ：:*')]
            for index, th in enumerate(th_list):
                td = tr.xpath(f'td[{index + 1}]//text()')[0].strip()
                detail[th] = td
        return detail

    # 通过返回的json数据，获取页面中指定标签值，构建为字典
    def parse_json(self, detail_dict, html):
        result_dict = dict()
        for div_key in detail_dict:
            result_key = html.xpath(f'//div[@id="jqgh_gridlist_{div_key}"]/text()')[0].strip() if html.xpath(
                f'//div[@id="jqgh_gridlist_{div_key}"]/text()') else ''
            # print(result_key)
            if result_key:
                result_dict[result_key] = detail_dict[div_key]
        return result_dict

    def chinese_encoding(self, resp):
        # 解决编码问题
        encoding = resp.apparent_encoding
        res_str = resp.content.decode(encoding, 'ignore')
        return res_str

    def main(self):
        pages = re.findall(r'(\d+)页', '')[0]
        print(f'共{pages}页，正在获取首页数据')
        for page in range(1, int(pages) + 1):
            pass
            print(f'第{page}页数据，保存成功！')
            # next_ajax_url = self.ajax_url.format(str(page + 1))
            # print(f'正在获取第{page + 1}页', response.status_code)


if __name__ == '__main__':
    RequestXpathModel().main()


