import configparser
import datetime
import hashlib
import os
import sys
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

    def create(self, key, errorRate, capacity, expansion=None, noScale=None):
        """
        创建bloom 键值
        :param key: 键
        :param errorRate: 容错率，容错率越小需要的空间越大
        :param capacity: 数据总量大小
        :param expansion: 数据量超过后扩展，默认扩展为2
        :param noScale: 默认扫描
        :return:
        """
        self.rb.bfCreate(key, errorRate, capacity, expansion, noScale)

    def add(self, key, value):
        """
        向对应的键中添加单个数据
        :param key: 键值
        :param value: 数据
        :return:
        """
        self.rb.bfAdd(key, value)

    def madd(self, key, *value):
        """
        向对应的键中添加批量数据（元祖）
        :param key: 键值
        :param value: 数据
        :return:
        """
        self.rb.bfMAdd(key, value)

    def insert(self, key, items, capacity=None, error=None, noCreate=None, expansion=None, noScale=None):
        """
        向键中批量添加数据，items为数组
        :param key: 键
        :param items: 数组数据
        :param capacity: 数据量大小
        :param error: 容错率
        :param noCreate: 是否创建，默认是，如果键不存在，默认创建
        :param expansion: 扩展
        :param noScale:
        :return:
        """
        self.rb.bfInsert(key, items, capacity, error, noCreate, expansion, noScale)

    def exists(self, key, value):
        """
        判断值是否存在
        :param key: 键
        :param value: 值
        :return:
        """
        return self.rb.bfExists(key, value)

    def mexists(self, key, value):
        """
        批量判断值是否存在
        :param key: 值
        :param value: 值（元祖）
        :return:
        """
        return self.rb.bfMExists(key, *value)


if __name__ == '__main__':
    dblib = mssqldb.dbHelper('liuxiang')
    start = time.process_time()
    totalcount = 0
    pageindex = 1
    bb = bloomfilter()
    bb.create('news:bloomfilter', 0.0001, 1000000000)
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

            bb.insert('news:bloomfilter', arr)
            totalcount += len(newslist)
            print(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S") + '已抓取信息初始化(Set Cache)，已初始化%s条数据。' % totalcount)
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

                bb.insert('news:bloomfilter', arr)
                totalcount += len(newslist)
                print(datetime.datetime.now().strftime(
                    "%Y-%m-%d %H:%M:%S") + '已抓取信息初始化(Set Cache)，已初始化%s条数据。' % totalcount)
                pageindex += 1

    elapsed = time.process_time() - start
    print('time is %6.3f' % (elapsed))
