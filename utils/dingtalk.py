import json
import requests
import sys
import os
sys.path.append(os.path.realpath(os.path.dirname(__file__)+'/../'))
from utils import config


class dingtalk:
    def __init__(self):
        self.conf = config

    def sendWebHookMsg(self, type, content):
        '''发送钉钉web群机器人消息.

        :param type: 机器人类型，具体类型参见配置文件，"数据采集","资讯监测".
        :param content: 消息内容

        '''
        atlist = []
        if self.conf.webhooks[type] != None:
            if self.conf.webhooks[type]["isatall"] == 'True':
                self.sendWebHookTextMsg(
                    self.conf.webhooks[type]["url"], content,isatall=True)
            else:
                if self.conf.webhooks[type]["at"] != None and len(self.conf.webhooks[type]["at"]) > 0:
                    for atitem in self.conf.webhooks[type]["at"]:
                        atlist.append(self.conf.linkmans[atitem]["tel"])
                if len(atlist) > 0:
                    self.sendWebHookTextMsg(
                        self.conf.webhooks[type]["url"], content, at=atlist)
                else:
                    self.sendWebHookTextMsg(
                        self.conf.webhooks[type]["url"], content)
    
    def sendWebHookMDMsg(self, type,title, content):
        '''发送钉钉web群机器人消息.

        :param type: 机器人类型，具体类型参见配置文件，"数据采集","资讯监测".
        :param content: 消息内容

        '''
        atlist = []
        if self.conf.webhooks[type] != None:

            if self.conf.webhooks[type]["isatall"]=='True':

                self.sendMarkdownMsg(
                    self.conf.webhooks[type]["url"], title, content,isatall=True)
            else:
                if self.conf.webhooks[type]["at"] != None and len(self.conf.webhooks[type]["at"]) > 0:
                    for atitem in self.conf.webhooks[type]["at"]:
                        atlist.append(self.conf.linkmans[atitem]["tel"])
                if len(atlist) > 0:
                    self.sendMarkdownMsg(
                        self.conf.webhooks[type]["url"], title,content, at=atlist)
                else:
                    self.sendMarkdownMsg(
                        self.conf.webhooks[type]["url"], title,content)

    def sendWebHookTextMsg(self, url, content, at=None,isatall=False):
        '''发送钉钉web群机器人消息.

        :param url: 机器人地址.
        :param content: 消息内容
        :param at: at人列表

        '''
        if isatall:
            data = {
                "msgtype": "text",
                "text": {
                    "content": content
                },
                "at": {

                    "isAtAll": True
                }
            }
        else:
            if at != None:
                atstr = ''
                atlist = []
                for item in at:
                    atstr = atstr+' @'+item
                    atlist.append(item)

                data = {
                    "msgtype": "text",
                    "text": {
                        "content": content+atstr
                    },
                    "at": {
                        "atMobiles": atlist,
                        "isAtAll": False
                    }
                }
            else:
                data = {
                    "msgtype": "text",
                    "text": {
                        "content": content
                    }
                }

        headers = {
            'user-agent': 'eliansun data crawl',
            'Content-Type': 'application/json'}
        response = requests.post(url, headers=headers, data=json.dumps(data))

    def sendMarkdownMsg(self,url,title,content,at=None,isatall=False):
        '''发送钉钉web群机器人消息.

        :param url: 机器人地址.
        :param content: 消息内容
        :param at: at人列表

        '''
        if isatall:
            data = {
                "msgtype": "markdown",
                "markdown": {
                    "title": title,
                    "text": content
                },
                "at": {
                    "isAtAll": True
                }
            }
        else:
            if at != None:
                atstr = ''
                atlist = []
                for item in at:
                    atstr = atstr+' @'+item
                    atlist.append(item)

                data = {
                    "msgtype": "markdown",
                    "markdown": {
                        "title":title,
                        "text": content
                    },
                    "at": {
                        "atMobiles": atlist,
                        "isAtAll": False
                    }
                }
            else:
                data = {
                    "msgtype": "markdown",
                    "markdown": {
                        "title":title,
                        "text": content
                    }
                }

        headers = {
            'user-agent': 'eliansun data crawl',
            'Content-Type': 'application/json'}
        response = requests.post(url, headers=headers, data=json.dumps(data))

if __name__ == "__main__":
    # dingtalk.sendWebHookTextMsg("https://oapi.dingtalk.com/robot/send?access_token=a14fb545a15fa89fedf3681dbd6fce6138d4f9f5b1aadeedebb8aa2c71ce4f62","测试采集")
    # dingtalk.sendWebHookTextMsg("https://oapi.dingtalk.com/robot/send?access_token=a14fb545a15fa89fedf3681dbd6fce6138d4f9f5b1aadeedebb8aa2c71ce4f62","测试采集",["晏松"])
    # dingtalk().sendWebHookMsg("数据采集", "测试")
    content="""## 供应链20200827批次白天采集报告   
> 共涉及计划任务10个，成功9个，失败1个  
> 共涉及平台23个，模板45个，15个会员，50个批次，1000个用户   
> 采集失败用户共计100个，账号密码错误10个，数量验证不通过10个，其他错误80个    

> **失败计划任务**：  
- xxx任务    
> **账号密码错误**：     
- 广西药品交易平台-哈药制药总厂   
- 广东药品交易平台-哈药三精制药   
> **数量验证不通过**：  
- 广西药品交易平台-哈药制药总厂   
- 广东药品交易平台-哈药三精制药    
> **其他错误**：  
- 广西药品交易平台-哈药制药总厂   
- 广东药品交易平台-哈药三精制药   

 
"""
    dingtalk().sendWebHookMDMsg("数据采集","测试",content)
