# -*- coding:utf-8 -*-
import json
import pkgutil
import traceback
import pymssql
from DBUtils.PooledDB import PooledDB
from pymssql import OperationalError, InternalError


class DbManager():

    def __init__(self, dbname):
        args = (10, 10, 30, 100, True, 0, None)
        ret = pkgutil.get_data("utils", "config.json")
        globalconfig = json.loads(ret)
        sqldb = globalconfig.get('sqldb')
        localdb = sqldb.get(dbname)
        if not localdb:  raise (NameError, "no db Info")
        conn_args = {
            'host': "%s" % localdb.get("host"),
            'port': "%s" % localdb.get("port"),
            'database': "%s" % localdb.get("database"),
            'charset': "%s" % "utf8",
            'user': "%s" % localdb.get("user"),
            'password': "%s" % localdb.get("password")
        }
        try:
            self._pool = PooledDB(pymssql, *args, **conn_args)
        except Exception as e:
            print("The parameters for DBUtils is:", conn_args)

    def _getConn(self):
        return self._pool.connection()

    def test_conn(self):
        """
            测试连接池连接是否正常
            return：
            res：True：正常，False：不正常
            msg：如果不正常，为异常信息
        """

        test_sql = """
            select 1

        """

        conn = None
        cur = None
        res = False
        msg = ""
        try:
            conn = self._getConn()
            cur = conn.cursor(as_dict=True)

            cur.execute(test_sql)
            res = cur.fetchall()
            res = True
        except Exception as e:
            traceback.print_exc()
            msg = e
        finally:
            if cur:
                cur.close()
            if conn:
                conn.close()
            return res, msg

    def call_reConn(self):
        """
            重新创建连接池
        """
        self._getConn()

    def ExecQuery(self, sql):
        """
            dbutils 数据连接池
                只能执行数据查询sql语句,否则会抛错
            @parm: 要执行的sql语句
            @return:
                []:查询结果为空
                None:sql语句执行失败,出现异常
                        二维list:正常结果
        """

        conn = None
        cur = None
        res = None
        try:
            conn = self._getConn()
            cur = conn.cursor(as_dict=True)

            cur.execute(sql)
            res = cur.fetchall()
        except (OperationalError, InternalError):
            self.call_reConn()
            traceback.print_exc()
        except:
            traceback.exc()
        finally:
            if cur:
                cur.close()
            if conn:
                conn.close()
            return res

    def p_query_one(self, sql):
        """
            dbutils 数据连接池
                    只能执行数据查询sql语句，否则会报错
                    执行sql查询语句，获取第一条记录
            @parm：要执行的sql语句
            @return：
                []:查询结果为空
                None:sql语句执行失败,出现异常
                list:正常结果
        """

        conn = None
        cur = None
        res = None
        try:
            conn = self._getConn()
            cur = conn.cursor(as_dict=True)

            cur.execute(sql)
            res = cur.fetchone()
        except (OperationalError, InternalError):
            self.call_reConn()
        except:
            traceback.print_exc()
        finally:
            if cur:
                cur.close()
            if conn:
                conn.close()
            return res

    def ExecNonQueryByParm(self, sql, tup):
        """
            dbutils 数据连接池
                    执行数据操作语句，包括 update,insert,delete
            @parm:要执行的sql
            @return:
                None:sql语句执行失败,出现异常
                number:影响记录条数
                -2:数据库连接失败导致执行失败
        """
        conn = None
        cur = None
        res = None
        try:
            conn = self._getConn()
            cur = conn.cursor(as_dict=True)

            cur.execute(sql, tup)
            res = cur._cursor.rowcount
            conn.commit()
        except Exception as e:
            if conn:
                conn.rollback()
            traceback.print_exc()
        finally:
            if res == -1:  # 可能是数据库断开连接
                ret, msg = self.test_conn()
                if not ret:
                    self.call_reConn()
                    res = -2
            if cur:
                cur.close()
            if conn:
                conn.close()
            return res

    def p_mutiexec(self, sql_list):
        """
            dbutils 数据连接池
                    执行多条数据操作语句,可以用于多条sql语句的事务性操作,包括 update,insert,delete

            @parm:要执行的sql语句[]
            @return:
                (flag,res):
                    flag<Ture or False>:批次是否全部执行成功
                    res<list>:每天sql语句执行影响的行数,如果执行失败,由此可以判断第几条sql语句执行失败
                                如果遇到数据库断开的情况,返回[-2,]

        """

        conn = None
        cur = None
        res = []
        flag = True

        try:
            conn = self._getConn()
            cur = conn.cursor(as_dict=True)

            for sql in sql_list:
                cur.execute(sql)
                num = cur._cursor.rowcount
                res.append(num)
            conn.commit()
        except Exception as e:
            if conn:
                conn.rollback()
            traceback.print_exc()
        finally:
            if -1 in res:
                ret, msg = self.test_conn()
                if not ret:
                    self.call_reConn()
                    flag = False
                    res = [-2, ]
            if cur:
                cur.close()
            if conn:
                conn.close()
            return flag, res