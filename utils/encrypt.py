# coding:utf-8
"""
# 注：python3 安装 Crypto 是 pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple pycryptodome<br><br>
pip install pycryptodome    window
pip install pycrypto     linux
"""
import base64
import hmac
from hashlib import md5
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
from Crypto.Cipher import PKCS1_v1_5 as Cipher_pksc1_v1_5
from Crypto.PublicKey import RSA


# 解密
def aes_decode(data, key, vi=''):
    try:
        if vi:
            aes = AES.new(key.encode('utf-8'), AES.MODE_CBC, vi.encode('utf-8'))
        else:
            aes = AES.new(key.encode('utf-8'), AES.MODE_ECB)
        decrypted_text = aes.decrypt(base64.decodebytes(bytes(data, encoding='utf8'))).decode("utf8")  # 解密
        decrypted_text = decrypted_text[:-ord(decrypted_text[-1])]  # 去除多余补位
    except Exception as e:
        pass
    return decrypted_text


# 加密
def aes_encode(data, key, vi=''):
    # while len(data) % 16 != 0:  # 补足字符串长度为16的倍数
    #     data += (16 - len(data) % 16) * chr(16 - len(data) % 16)
    # data = str.encode(data)
    # aes = AES.new(str.encode(key), AES.MODE_ECB)  # 初始化加密器
    # return str(base64.encodebytes(aes.encrypt(data)), encoding='utf8').replace('\n', '')  # 加密

    if vi:
        aes = AES.new(key.encode('utf-8'), AES.MODE_CBC, vi.encode('utf-8'))
    else:
        aes = AES.new(key.encode('utf-8'), AES.MODE_ECB)
    pad_pkcs7 = pad(data.encode('utf-8'), AES.block_size, style='pkcs7')  # 选择pkcs7补全
    encrypt_aes = aes.encrypt(pad_pkcs7)

    # 加密结果
    encrypted_text = str(base64.encodebytes(encrypt_aes), encoding='utf-8')  # 解码
    encrypted_text_str = encrypted_text.replace("\n", "")
    return encrypted_text_str


# RSA
def jsencrypt(key, pwd):
    rsakey = RSA.importKey(key)
    cipher = Cipher_pksc1_v1_5.new(rsakey)
    cipher_text = base64.b64encode(cipher.encrypt(pwd.encode()))
    return cipher_text.decode()


def get_md5(data, encoding='utf8'):
    """获取字符串的MD5值"""
    return md5(data.encode(encoding)).hexdigest()


def hmac_md5(key, data):
    """
    hmac 加密
    key: 密钥
    data: 加密值
    :return str
    """
    res = hmac.new(key.encode(), md5(data.encode()).hexdigest().encode(),
                   md5).hexdigest()
    return res


if __name__ == '__main__':
    print('b85fad33f5e086981b9e4280a4306128')
    print(aes_encode('S2612', '12345678900000001234567890000000', '1234567890000000'))
