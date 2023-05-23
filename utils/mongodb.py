import json
import pkgutil

from pymongo import MongoClient


class Database:
    def __init__(self, dbname):
        self.dbname = dbname
        ret = pkgutil.get_data("utils", "config.json")
        globalconfig = json.loads(ret)
        mongodb = globalconfig.get('mongo')
        localdb = mongodb.get(dbname)
        self.client = MongoClient(host=localdb.get('host'), port=localdb.get('port'))
        self.db = self.client.admin
        self.db.authenticate(localdb.get('user'), localdb.get('password'), mechanism='SCRAM-SHA-1')
        self.db = self.client[localdb.get('database')]

    def get_state(self):
        return self.client is not None and self.db is not None

    def insert_one(self, collection, data):
        if self.get_state():
            ret = self.db[collection].insert_one(data)
            return ret
        else:
            return ""

    def insert_many(self, collection, data):
        if self.get_state():
            ret = self.db[collection].insert_many(data)
            return ret
        else:
            return ""

    def update(self, collection, condition,data):

        if self.get_state():
            return self.db[collection].update_many(condition, {"$set": data}).modified_count
        return 0

    def updatearray(self, collection, condition,data,arrayFilter):

        if self.get_state():
            return self.db[collection].update_many(condition, {"$set": data},array_filters=arrayFilter).modified_count
        return 0
    def updateinc(self,collection, condition,data,arrayFilter):
        if self.get_state():
            return self.db[collection].update_many(condition, {"$inc": data},array_filters=arrayFilter).modified_count
        return 0

    def push(self,collection,condition,column,data):
        if self.get_state():
                return self.db[collection].update(condition,{"$push":{column:{'$each':data}}})

    def find(self, collection, condition, column=None):
        if self.get_state():
            if column is None:
                return self.db[collection].find(condition)
            else:
                return self.db[collection].find(condition, column)
        else:
            return None
    def findone(self, collection, condition, column=None):
        if self.get_state():
            if column is None:
                return self.db[collection].find_one(condition)
            else:
                return self.db[collection].find_one(condition, column)
        else:
            return None

    # 查询的结果要打印的话需要用list转一下

    def delete(self, collection, condition):
        if self.get_state():
            return self.db[collection].delete_many(filter=condition).deleted_count
        return 0
