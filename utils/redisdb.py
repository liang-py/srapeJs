import json
import os
import pkgutil

import redis
import threading
import logging
import configparser
from redisbloom.client import Client


class redisClient(object):
    """
    py2.7, py3.4
    """

    # mutex = threading.Lock()  # gevent 里使用线程锁可能有问题
    config = None
    connection_pool = None
    connection_client = None

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
        ret = pkgutil.get_data("utils", "config.json")
        globalconfig = json.loads(ret)
        redisdb = globalconfig.get('redis')
        if not redisdb:  raise (NameError, "no redisdb Info")
        host = redisdb.get("host")
        pwd = redisdb.get("password")
        port = redisdb.get("port")
        db=redisdb.get("db",0)
        config = {
            "host": host,
            "port": port,
            "auth": pwd,
            "index": db,
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
        temp_pool = redis.ConnectionPool(host=self.config['host'], port=self.config['port'], db=self.config['index'],
                                         password=self.config['auth'],
                                         encoding=self.config['encoding'], max_connections=max_conn,
                                         decode_responses=decode_responses)
        self.connection_pool = temp_pool
        temp_client = redis.StrictRedis(connection_pool=self.connection_pool)
        self.connection_client = temp_client

    def rpush(self, key, json_text, expired_in_seconds=0):
        r = self.connection_client
        # self.mutex.acquire()
        pipe = r.pipeline()
        pipe.rpush(key, json_text)
        if expired_in_seconds > 0:
            pipe.expire(key, expired_in_seconds)
        pipe.execute()
        # self.mutex.release()

    def lpush(self, key, json_text, expired_in_seconds=0):

        r = self.connection_client
        # self.mutex.acquire()
        pipe = r.pipeline()
        pipe.lpush(key, json_text)
        if expired_in_seconds > 0:
            pipe.expire(key, expired_in_seconds)
        pipe.execute()
        # self.mutex.release()

    def lpop_pipline(self, key, length):
        i = 0
        poped_items = []
        r = self.connection_client
        # self.mutex.acquire()
        curent_len = r.llen(key)
        if curent_len > 0:
            target_len = 0
            if curent_len > length:
                target_len = length
            else:
                target_len = curent_len
            pipe = r.pipeline()
            while i < target_len:
                pipe.lpop(key)
                i += 1
            temp_poped_items = pipe.execute()
            poped_items = temp_poped_items
        # self.mutex.release()
        return poped_items

    def lrem(self, key, value):
        r = self.connection_client
        # self.mutex.acquire()
        r.lrem(key, 0, value)

    def lpop(self, key):
        poped_items = []
        r = self.connection_client
        # self.mutex.acquire()
        data = r.lpop(key)
        if data:
            poped_items.append(data)
        # self.mutex.release()
        return poped_items

    def rpop_pipline(self, key, length):
        i = 0
        poped_items = []
        r = self.connection_client
        # self.mutex.acquire()
        curent_len = r.llen(key)
        if curent_len > 0:
            target_len = 0
            if curent_len > length:
                target_len = length
            else:
                target_len = curent_len
            pipe = r.pipeline()
            while i < target_len:
                pipe.rpop(key)
                i += 1
            temp_poped_items = pipe.execute()
            poped_items = temp_poped_items
        # self.mutex.release()
        return poped_items

    def rpop(self, key):
        poped_items = []
        r = self.connection_client
        # self.mutex.acquire()
        data = r.rpop(key)
        if data:
            poped_items.append(data)
        # self.mutex.release()
        return poped_items

    def hincrby(self, hash_key, field, amount=1):
        r = self.connection_client
        # self.mutex.acquire()
        result = r.hincrby(hash_key, field, amount)
        # self.mutex.release()
        return result

    def llen(self, key):
        r = self.connection_client
        # self.mutex.acquire()
        result = r.llen(key)
        # self.mutex.release()
        return result
    def hlen(self, key):
        r = self.connection_client
        # self.mutex.acquire()
        result = r.hlen(key)
        # self.mutex.release()
        return result

    def lrange(self, key, start, end):
        r = self.connection_client
        result = r.lrange(key, start, end)
        return result

    def hdel(self, key, field):
        r = self.connection_client
        # self.mutex.acquire()
        result = r.hdel(key, field)
        # self.mutex.release()
        return result

    def hset(self, key, field, value, expired_in_seconds=0):
        r = self.connection_client
        # self.mutex.acquire()
        pipline = r.pipeline()
        pipline.hset(key, field, value)
        if expired_in_seconds > 0:
            pipline.expire(key, expired_in_seconds)
        pipline.execute()
        # self.mutex.release()

    def info(self, section=None):
        r = self.connection_client
        # self.mutex.acquire()
        result = r.info(section)
        # self.mutex.release()
        return result

    def exceed_memory_limits(self):
        result = False
        if "target_max_memory" in self.config.keys():
            target_max_memory = self.config["target_max_memory"]
            redis_info = self.info("memory")
            distance = self.__max_memory_distance(redis_info, target_max_memory)
            if distance and distance <= 0:
                result = True
        return result

    def __max_memory_distance(self, redis_info_dict, target_max):
        # # Memory
        # used_memory:472978192
        # used_memory_human:451.07M
        # used_memory_rss:510640128
        # used_memory_peak:493548568
        # used_memory_peak_human:470.68M
        # used_memory_lua:35840
        # mem_fragmentation_ratio:1.08
        # mem_allocator:jemalloc - 3.6.0
        result = None
        if "used_memory" in redis_info_dict.keys():
            temp_used = int(redis_info_dict["used_memory"])
            temp_used = temp_used / (1024 * 1024)
            result = target_max - temp_used
        else:
            logging.warning(u"used_memory is not found!")
        return result

    def sadd(self, key, value):
        r = self.connection_client
        # self.mutex.acquire()
        result = r.sadd(key, value)
        # self.mutex.release()
        return result

    def sismember(self, key, value):
        r = self.connection_client
        # self.mutex.acquire()
        result = r.sismember(key, value)
        # self.mutex.release()
        return result

    def exists(self, key):
        r = self.connection_client
        # self.mutex.acquire()
        result = r.exists(key)
        # self.mutex.release()
        return result

    def keys(self, pattern):
        r = self.connection_client
        # self.mutex.acquire()
        result = r.keys(pattern=pattern)
        # self.mutex.release()
        return result

    def delete(self, key):
        r = self.connection_client
        # self.mutex.acquire()
        r.delete(key)
        # self.mutex.release()

    def scan(self, cursor, match=None, count=50):
        """
        :param cursor:
        :param match:
        :param count:
        :return:
         (new_cursor,
            [key1, key2, key3 ...])
        """
        r = self.connection_client
        # self.mutex.acquire()
        result = r.scan(cursor=cursor, match=match, count=count)
        # self.mutex.release()
        return result

    def hmget(self, hash_key, fields_list):
        r = self.connection_client
        # self.mutex.acquire()
        result = r.hmget(hash_key, fields_list)
        # self.mutex.release()
        return result

    def hget(self, hash_key, field):
        r = self.connection_client
        result = r.hget(hash_key, field)
        return result

    def hgetall(self, hash_key):
        r = self.connection_client
        # self.mutex.acquire()
        result = r.hgetall(hash_key)
        # self.mutex.release()
        return result

    def set(self, key, value, ex=None):
        r = self.connection_client
        # self.mutex.acquire()
        result = r.set(key, value, ex)
        # self.mutex.release()
        return result

    def get(self, key):
        r = self.connection_client
        # self.mutex.acquire()
        result = r.get(key)
        # self.mutex.release()
        return result

    def close(self):
        if self.connection_pool:
            self.connection_pool.disconnect()


if __name__ == '__main__':
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

    rb = Client(host=config['host'], port=config['port'], db=config['index'],
                password=config['auth'],
                encoding=config['encoding'])
    rb.bfCreate('bloomw', 0.01, 10000000)
    rb.bfAdd('bloom', 'foo4')
