"""
时间处理相关
"""
import time
import datetime
import pandas as pd


def get_interval(date='2023-01-01', level='d') -> int:
    """
    获取输入日期与当前的天数间隔
    :param date: 需要判断间隔的日期
    :param level: 输入的日期格式， d: 2023-01-01 s: 2023-01-01 00:00:00
    :return: 时间间隔， 负数
    """
    if level == 'd':
        old = datetime.datetime.strptime(date, '%Y-%m-%d')
    elif level == 's':
        old = datetime.datetime.strptime(date, '%Y-%m-%d %H:%M:%S')
    else:
        raise AttributeError("arguments level is not type")
    now = datetime.datetime.now()
    d = old - now
    return d.days + 1


def days_timestamp_list(days):
    """
    获取间隔天数日期, 获取时间戳
    :param days: + 往前days天，- 往后days天
    :return: list ['2023-04-11 14:57:18', 1681196238]
    """
    # 先获得时间数组格式的日期
    threeDayAgo = (datetime.datetime.now() - datetime.timedelta(days=days))
    # 转换为时间戳, 10位
    timeStamp = int(time.mktime(threeDayAgo.timetuple()))
    otherStyleTime = threeDayAgo.strftime("%Y-%m-%d %H:%M:%S")
    # print(timeStamp)
    return [otherStyleTime, timeStamp]


def get_days(start: str, end: str):
    """
    # 获取时间范围内各个月份的日期
    :param start: 20230125
    :param end: 20230125
    :return: list, [['2023-01-25', '2023-01-31'], ['2023-02-01', '2023-02-28'], ['2023-03-01', '2023-03-31']]
    """
    day_data = {}
    days = [datetime.datetime.strftime(x, '%Y-%m-%d') for x in
            list(pd.date_range(start=start, end=end, freq='D'))]
    for day in days:
        timeStr = datetime.datetime.strptime(str(day), "%Y-%m-%d")
        key = datetime.datetime.strftime(timeStr, "%Y-%m")
        if not day_data.get(key):
            day_data[key] = []
        day_data[key].append(day)
    if day_data is {}:
        return None
    daysList = get_days_list(day_data)
    return daysList


def get_days_list(data):
    """

    :param data: {"%Y-%m: []}
    :return:
    """
    timeList = []
    for k, value in data.items():
        if len(value) == 1:
            timeList.append([value[0], value[0]])
        elif len(value) > 1:
            timeList.append([value[0], value[-1]])
    return timeList


if __name__ == '__main__':
    print(get_days('20230125', '20230331'))
    print(days_timestamp_list(-1))
