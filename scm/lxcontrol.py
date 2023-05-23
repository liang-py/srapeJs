# -*- coding: utf-8 -*-
import copy
import datetime
import time
import requests
from scrapy.cmdline import execute
import os
import sys
import uuid
from scrapy.utils.log import configure_logging

root_path = os.path.abspath(os.path.dirname(__file__)).split('流向采集')[0]
sys.path.append(root_path + "流向采集")
sys.path.append(root_path + "流向采集/scm")
sys.path.append(root_path + "流向采集/scm/scm")

from utils import mssqldb_pool
from twisted.internet import reactor, defer
from scrapy.crawler import CrawlerRunner
from scrapy.utils.project import get_project_settings

dblib = mssqldb_pool.DbManager('liuxiang')

settings = get_project_settings()
runner = CrawlerRunner(get_project_settings())


@defer.inlineCallbacks
def crawl(platformid, platformuserid):
    _ = ''
    if platformuserid:
        _ = f" and  platformuserid = '{platformuserid}'  "

    temps = dblib.ExecQuery(f'''
                        begin
    iF object_id('temp_user') is not null
        drop table temp_user
    select newid() uuid,companyscid,case when charindex('-',PlatformUserID)>0 then  SUBSTRING(PlatformUserID,0,charindex('-',PlatformUserID)) else PlatformUserID end as usercode into temp_user from Pre_PlatformUser  GROUP BY case when charindex('-',PlatformUserID)>0 then  SUBSTRING(PlatformUserID,0,charindex('-',PlatformUserID)) else PlatformUserID end ,companyscid
    select tp.*, tb.uuid
    from (select a.SpiderName, a.PlatformID, b.PlatformUserID, b.companyscid,TemplateID,case when charindex('-',PlatformUserID)>0 then  SUBSTRING(PlatformUserID,0,charindex('-',PlatformUserID)) else PlatformUserID end as busercode
          from Pre_PlatformTempalte (nolock) a
                   inner join Pre_PlatformUser (nolock) b on a.PlatformID = b.PlatformID
          where b.Stauts = 1 and a.STATUS =1
            and companyscid is not null
            and ISNULL(FieldMapping, '') != ''
            and a.PlatformID = '{platformid}' {_}   ) tp
             inner join
         (select *
          from temp_user) tb on tb.usercode = tp.busercode and tb.companyscid = tp.companyscid order by tp.PlatformUserID
end

    ''')
    TemplateIsNot_res = dblib.ExecQuery("SELECT value FROM Pre_PlatformRunConfig where type='TemplateIsNot'")
    TemplateIsNot_val = TemplateIsNot_res[0]['value'].split(';')
    for temp in temps:
        spidername = temp['SpiderName']
        platformid = temp['PlatformID']
        usercode = temp['PlatformUserID']
        templateid = temp['TemplateID']
        uuuid = temp['uuid']
        batchid = str(uuid.uuid1())
        userid_templateId = f'{usercode}:{templateid}'
        if userid_templateId in TemplateIsNot_val:
            # raise Exception("This template is not to running")
            print('This template is not to running:%s, is closed' % userid_templateId)
            # print("编号：%s，爬虫%s已停止" % (usercode, name))
            continue
        yield runner.crawl(spidername, platformid, usercode, templateid, str(batchid), uuuid)
    reactor.stop()


def async_crawl(platformid, platformuserid):
    _ = ''
    if platformuserid:
        _ = f" and  platformuserid = '{platformuserid}'  "

    temps = dblib.ExecQuery(f'''
                                               begin
    iF object_id('temp_user') is not null
        drop table temp_user
    select newid() uuid,companyscid,case when charindex('-',PlatformUserID)>0 then  SUBSTRING(PlatformUserID,0,charindex('-',PlatformUserID)) else PlatformUserID end as usercode into temp_user from Pre_PlatformUser  GROUP BY case when charindex('-',PlatformUserID)>0 then  SUBSTRING(PlatformUserID,0,charindex('-',PlatformUserID)) else PlatformUserID end ,companyscid
    select tp.*, tb.uuid
    from (select a.SpiderName, a.PlatformID, b.PlatformUserID, b.companyscid,TemplateID,case when charindex('-',PlatformUserID)>0 then  SUBSTRING(PlatformUserID,0,charindex('-',PlatformUserID)) else PlatformUserID end as busercode
          from Pre_PlatformTempalte (nolock) a
                   inner join Pre_PlatformUser (nolock) b on a.PlatformID = b.PlatformID
          where b.Stauts = 1 and a.STATUS =1
            and companyscid is not null
            and ISNULL(FieldMapping, '') != ''
            and a.PlatformID = '{platformid}' {_}   ) tp
             inner join
         (select *
          from temp_user) tb on tb.usercode = tp.busercode and tb.companyscid = tp.companyscid order by tp.PlatformUserID
end


    ''')
    if len(temps) > 0:
        _batchid = ''
        # 采集模板调用查询
        TemplateIsNot_res = dblib.ExecQuery("SELECT value FROM Pre_PlatformRunConfig where type='TemplateIsNot'")
        TemplateIsNot_val = TemplateIsNot_res[0]['value'].split(';')
        for temp in temps:
            spidername = temp['SpiderName']
            platformid = temp['PlatformID']
            usercode = temp['PlatformUserID']
            templateid = temp['TemplateID']
            batchid = str(uuid.uuid1())
            uuuid = temp['uuid']
            userid_templateId = f'{usercode}:{templateid}'
            if userid_templateId in TemplateIsNot_val:
                # raise Exception("This template is not to running")
                print('This template is not to running, is closed')
                # print("编号：%s，爬虫%s已停止" % (usercode, name))
                continue
            runner.crawl(spidername, platformid, usercode, templateid, str(batchid), uuuid)

        d = runner.join()
        d.addBoth(lambda _: reactor.stop())
    else:
        print('未查询到采集模板')
        exit()


if __name__ == "__main__":
    configure_logging()
    try:
        args = sys.argv
        platformuserid = ''
        if len(args) == 3:
            platformuserid = args[2]
        platformid = args[1]
        # platformid = 'liuxiang-0404'
        res = dblib.ExecQuery('''select * from Pre_PlatformRunConfig where type='synchronousCrawl' ''')[0]["value"]
        reslist =  res.split(";")

        if platformid in reslist:
            crawl(platformid, platformuserid)
        else:
            async_crawl(platformid, platformuserid)


        reactor.run()
    finally:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4115.0 Safari/537.36 Edg/84.0.488.0',
            'Content-Type': 'application/json;charset=UTF-8'
        }
        data = {"appName": platformid, "namespace": "default"}
        # requests.request('post', 'http://10.25.130.12:9999/api/v1/k8s/freed', json=data, headers=headers)
