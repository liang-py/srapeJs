import os
import json
import time


# 装饰器
def retry_login(level=5):
    def wrapper(func):
        def inner(*args, **kwargs):
            # 返回值
            print(f"重试次数：{level}")
            res = func(*args, **kwargs)
            for i in range(level):
                print(f'res:{res}, 重试:{i}')
                if res['code'] == 1:
                    break
                res = func(*args, **kwargs)
            # return func()
            return res

        return inner

    return wrapper


def hassuffix(file, suffix):
    """判断文件的后缀"""
    if not os.path.splitext(file)[1] is None and os.path.splitext(file)[1].lower() == suffix.lower():
        return True
    else:
        return False


if __name__ == '__main__':
    pass
