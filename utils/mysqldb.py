# -*- coding: utf-8 -*-
import json
import pkgutil
import pymysql
from DBUtils.PooledDB import PooledDB


class dbHelper:
    def __init__(self,dbname):

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
        self.pool = PooledDB(creator=pymysql, mincached=2, maxcached=20, maxshared=10, maxconnections=20,
                             blocking=True, host=self.host, user=self.user, \
                             password=self.pwd, database=self.db, port=self.port,charset="utf8mb4")

    # def __GetConnect(self):
    #     self.conn = pymssql.connect(host=self.host, user=self.user, password=self.pwd, database=self.db, charset="utf8")
    #     cur = self.conn.cursor(as_dict=True)
    #     return cur

    def ExecQuery(self, sql):
        conn = None
        cur = None
        try:
            conn = self.pool.connection()
            cur = conn.cursor(pymysql.cursors.DictCursor)
            cur.execute(sql)
            relist = cur.fetchall()
            return relist
        except Exception as e:
            print('sql:[{}]meet error'.format(sql))
            print(e.args[-1])
            return ()
        finally:
            if conn:
                conn.close()
            if cur:
                cur.close()

    # 执行更新插入操作
    def ExecNonQuery(self, sql):
        conn = None
        cur = None
        try:
            conn = self.pool.connection()
            cur = conn.cursor()
            cur.execute(sql)
            conn.commit()
            return True
        except Exception as e:
            print('[{}]meet error'.format(sql))
            print(e.args[-1])
            conn.rollback()
            return False
        finally:
            if conn:
                conn.close()
            if cur:
                cur.close()

    def ExecNonQueryByParm(self, sql, tup):
        conn = None
        cur = None
        try:
            conn = self.pool.connection()
            cur = conn.cursor()
            cur.execute(sql, tup)
            conn.commit()
            return True

        except Exception as e:
            print('[{}]meet error'.format(sql))
            print(e.args[-1])
            conn.rollback()
            return False
        finally:
            if conn:
                conn.close()
            if cur:
                cur.close()
    def Executemany(self,sql,tup):
        conn = None
        cur = None
        try:
            conn = self.pool.connection()
            cur = conn.cursor()
            cur.executemany(sql, tup)
            conn.commit()
            return True

        except Exception as e:
            print('[{}]meet error'.format(sql))
            print(e)
            conn.rollback()
            return False
        finally:
            if conn:
                conn.close()
            if cur:
                cur.close()
    # def ExecPro(self, proName, tup):
    #     cur = self.__GetConnect()
    #     cur.callproc(proName, tup)
    #     resList = []
    #     resList.extend(cur)
    #     self.conn.close()
    #     return resList
    #
    # def ExecList(self, sql, list_row):
    #     cur = self.__GetConnect()
    #     cur.executemany(sql, list_row)
    #     self.conn.commit()
    #     self.conn.close()



