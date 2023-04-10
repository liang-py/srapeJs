def cookies_items(cookie: list, mode='str'):
    """
    <class 'requests.cookies.RequestsCookieJar'>
    将cookieJar转换的列表转换为字符串
    :param cookie:
    :param mode: 转换模式
    :return: str/dict
    """
    cookies = ''
    for key, val in cookie:
        if mode == 'str':
            cookies += f'{key}={val};'
        # cookieJar.get_dict() 内置函数
        # elif mode == 'dict':
        #     if not isinstance(cookies, dict):
        #         cookies = dict()
        #     cookies[key] = val
    return cookies
