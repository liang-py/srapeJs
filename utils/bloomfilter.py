import configparser
import datetime
import hashlib
import os
import sys
import json
import time
from redisbloom.client import Client
root_path = os.path.abspath(os.path.dirname(__file__)).split('流向采集')[0]
sys.path.append(root_path + "/流向采集")
sys.path.append(root_path + "/流向采集" + '/utils')
import mssqldb


class bloomfilter(object):
    '''redis 布隆过滤器'''
    config = None
    rb = None

    def __init__(self):
        """
        :param config: {"host":"",
                        "port": 0,
                        "index": 0,
                        "auth": "",
                        "encoding": "",
                        "decode_responses": False,
                        "max_connections": 1,
                        "target_max_memory": 1024
                        }
        """
        cf = configparser.ConfigParser()
        configpath = os.path.join(os.path.dirname(os.path.realpath(__file__)), "config.conf")
        cf.read(configpath)
        host = cf.get("redis", "db_host")
        pwd = cf.get("redis", "db_pass")
        port = cf.get("redis", "db_port")
        config = {
            "host": host,
            "port": port,
            "auth": pwd,
            "index": 0,
            "encoding": "utf-8",
            "decode_responses": True,  # 获取中文数据可以直接 decode python unicode
            "target_max_memory": 3896,
            "max_connections": 100
        }
        self.config = config
        max_conn = 1
        if "max_connections" in self.config:
            max_conn = self.config["max_connections"]
            if max_conn <= 0:
                max_conn = 1
        decode_responses = False
        if "decode_responses" in config:
            decode_responses = config["decode_responses"]
        self.rb = Client(host=config['host'], port=config['port'], db=config['index'],
                         password=config['auth'],
                         encoding=config['encoding'], max_connections=max_conn,
                         decode_responses=decode_responses)

    def create(self, key, errorRate, capacity,expansion=None, noScale=None):
        self.rb.bfCreate(key, errorRate, capacity,expansion,noScale)

    def add(self, key, value):
        self.rb.bfAdd(key, value)

    def madd(self, key, *value):
        self.rb.bfMAdd(key, value)

    def insert(self, key, items, capacity=None, error=None, noCreate=None, expansion=None, noScale=None):
        self.rb.bfInsert(key, items, capacity, error, noCreate, expansion, noScale)

    def exists(self, key, value):
        return self.rb.bfExists(key, value)

    def mexists(self, key, value):
        return self.rb.bfMExists(key, *value)

def initfile():
    dblib = mssqldb.dbHelper('liuxiang')
    start = time.process_time()
    totalcount = 0
    pageindex = 1

    while True:
        newslist = dblib.ExecQuery('''select * from (SELECT a.id, case when b.wmdistext=1 then  wmid+irUrl+irText else wmid+irUrl end  md5id FROM wmInfoResult a inner join wmWebMng b
                                on a.wmid=b.id) a
                order by id 
                offset ((%s-1)*100000) rows
                fetch next 100000 rows only ''' % pageindex)
        if len(newslist) == 0:
            break
        else:
            arr = []
            for item in newslist:
                md5id = hashlib.md5((item['md5id']).encode('utf8')).hexdigest()
                arr.append(md5id)

            with open("data/wmInfoResult_%s.json" % pageindex, "w") as f:
                json.dump(arr, f)
            totalcount += len(newslist)
            print(datetime.datetime.now().strftime(
                "%Y-%m-%d %H:%M:%S") + '已抓取信息初始化(Set Cache)，已初始化%s条数据。' % totalcount)
            pageindex += 1

    tables = dblib.ExecQuery('select * from wminfotables')
    for table in tables:
        print(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S") + '正在查询表' + table['tablename'])
        pageindex = 1
        while True:
            newslist = dblib.ExecQuery('''select * from (SELECT a.id, case when b.wmdistext=1 then  wmid+irUrl+irText else wmid+irUrl end  md5id FROM %s a inner join wmWebMng b
                                            on a.wmid=b.id) a
                            order by id 
                            offset ((%s-1)*100000) rows
                            fetch next 100000 rows only ''' % (table['tablename'], pageindex))
            if len(newslist) == 0:
                break
            else:
                arr = []
                for item in newslist:
                    md5id = hashlib.md5((item['md5id']).encode('utf8')).hexdigest()
                    arr.append(md5id)

                with open("data/%s_%s.json" % (table['tablename'], pageindex), "w") as f:
                    json.dump(arr, f)
                totalcount += len(newslist)
                print(datetime.datetime.now().strftime(
                    "%Y-%m-%d %H:%M:%S") + '已抓取信息初始化(Set Cache)，已初始化%s条数据。' % totalcount)
                pageindex += 1

    elapsed = time.process_time() - start
    print('time is %s' % (elapsed))

def initbloom():
    jsonarr=[]
    bb = bloomfilter()

    for root, dirs, files in os.walk('data'):
        # print(root)  # 当前目录路径
        # print(dirs)  # 当前路径下所有子目录
        jsonarr=files
    for item  in jsonarr:
        arr = []
        with open('data/'+item, "r", encoding="utf-8") as f:
            arr = json.load(f)
        bb.insert('news:bloomfilter', arr,100000000,0.00001)
        print(item+'完成')


def newinfo(date):
    dblib = mssqldb.dbHelper('liuxiang')
    bb = bloomfilter()
    newslist = dblib.ExecQuery("""SELECT a.id, case when b.wmdistext=1 then  wmid+irUrl+irText else wmid+irUrl end  md5id FROM wmInfoResult a inner join wmWebMng b
                    on a.wmid=b.id where a.irTime>='%s'""" % date)
    if newslist:
        arr = []
        for item in newslist:
            md5id = hashlib.md5((item['md5id']).encode('utf8')).hexdigest()
            arr.append(md5id)
        bb.insert('news:bloomfilter', arr)
        with open("data/wmInfoResult_%s.json" % (datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")), "w") as f:
            json.dump(arr, f)
        totalcount = len(newslist)
        print(datetime.datetime.now().strftime(
            "%Y-%m-%d %H:%M:%S") + '已抓取信息初始化(Set Cache)，已初始化%s条数据。' % totalcount)
    print('完成')

 # with open("result.json","w") as f:
 #               json.dump(arr,f)
# with open("result.json", "r", encoding="utf-8") as f:
#     arr = json.load(f)
if __name__=='__main__':
    # newinfo('2020-01-09')
    # initbloom()
    bf=bloomfilter()
    bf.create('test1',0,1,10)



