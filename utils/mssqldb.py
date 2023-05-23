# -*- coding: utf-8 -*-
import json
import os
import sys
import pymssql
import configparser
from importlib import reload
import pkgutil

from DBUtils.PooledDB import PooledDB


class dbHelper:

    def __init__(self, dbname):
        self.dbname = dbname
        ret = pkgutil.get_data("utils", "config.json")
        globalconfig = json.loads(ret)
        sqldb = globalconfig.get('sqldb')
        localdb = sqldb.get(dbname)
        if not localdb:  raise (NameError, "no db Info")
        # for module in pkgutil.iter_modules(''):
        #     print(module.module_finder.path, module.name)
        self.host = localdb.get("host")
        self.port = localdb.get("port")
        self.user = localdb.get("user")
        self.pwd = localdb.get("password")
        self.db = localdb.get("database")
        if not self.db:  raise (NameError, "no db Info")
        self._CreatePool()

    def _CreatePool(self):
        if not self.db:
            raise NameError + "没有设置数据库信息"
        self.Pool = PooledDB(creator=pymssql, mincached=2, maxcached=5, maxshared=3, maxconnections=6,
                             blocking=True, host=self.host, user=self.user, \
                             password=self.pwd, database=self.db, port=self.port,charset="utf8")


    def __GetConnect(self):
        self.conn = self.Pool.connection()
        cur = self.conn.cursor(as_dict=True)
        if not cur:
            raise Exception("数据库连接不上")
        else:
            return cur
    # 查询返回list
    def ExecQuery(self, sql):
        cur = self.__GetConnect()
        cur.execute(sql)
        relist = cur.fetchall()
        cur.close()
        self.conn.close()
        return relist

    #执行更新插入操作
    def ExecNonQuery(self, sql):
        #print(sql)
        cur = self.__GetConnect()
        cur.execute(sql)
        self.conn.commit()
        self.conn.close()

    def ExecNonQueryByParm(self, sql, tup):
        # print(sql)
        cur = self.__GetConnect()
        cur.execute(sql, tup)
        self.conn.commit()
        self.conn.close()

    def ExecPro(self, proName, tup):
        cur = self.__GetConnect()
        cur.callproc(proName, tup)
        resList = []
        resList.extend(cur)
        self.conn.close()
        return resList

    def ExecList(self, sql, list_row):
        cur = self.__GetConnect()
        cur.executemany(sql, list_row)
        self.conn.commit()
        self.conn.close()

    def Fetchmany(self, sql, size):
        cur = self.__GetConnect()
        cur.execute(sql)
        resList = cur.fetchmany(size)
        self.conn.close()
        return resList



if __name__ == '__main__':
    db = dbHelper('db')
    t=db.ExecQuery("select * from pre_platform where 1>2")
    print(t)
