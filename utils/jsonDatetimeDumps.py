import json
import datetime


class DateEncoder(json.JSONEncoder):
    """
    Object of type Timestamp is not JSON serializable
    转换json中的时间类型
    """

    def default(self, obj):
        if isinstance(obj, datetime.datetime):
            # return obj.strftime("%Y-%m-%dT%H:%M:%S")
            return obj.strftime("%Y-%m-%d")
        else:
            return json.JSONEncoder.default(self, obj)
