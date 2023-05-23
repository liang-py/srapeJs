# -*- coding:utf-8 -*-
import smtplib
import os
import time
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.header import Header
import sys
sys.path.append(os.path.realpath(os.path.dirname(__file__)+'/../'))
from utils import config

class mailhelp:
    '''
    邮件发送帮助类
    '''
    def __init__(self):
        self.conf=config
        self.smtp=self.conf.smtp
    
    def send(self,receivers,subject,content,attachs=None,isHtml=False):
        '''发送邮件

        : param receivers: 邮件接收人，多个用分号“;"分隔
        : param subject: 邮件主题
        : param content: 邮件正文内容
        : param attachs: 邮件附件，附件需绝对地址，多个附件用分号“;”分隔
        '''
        receiverlist=[]
        for item in receivers.split(';'):
            if item!=None and item!='' :
                receiverlist.append(item)
        
        sender=self.smtp["username"]
        #创建一个带附件的实例
        message = MIMEMultipart()
        message['From'] = Header("基础技术研发部<%s>"%self.smtp["username"], 'utf-8')
        message['Subject'] = Header(subject, 'utf-8')
        
        #邮件正文内容
        if isHtml==False:
            message.attach(MIMEText(content, 'plain', 'utf-8'))
        else:
            message.attach(MIMEText(content, 'html', 'utf-8'))

        # 构造附件
        if attachs:
            for item in attachs.split(";"):
                if item!=None and item!='':
                    att=MIMEText(open(item, 'rb').read(), 'base64', 'utf-8')
                    att["Content-Type"] = 'application/octet-stream'
                    # att["Content-Disposition"] = 'attachment; filename="%s"'%os.path.basename(os.path.realpath(item))
                    att.add_header('Content-Disposition', 'attachment', filename=os.path.basename(os.path.realpath(item)))
                    message.attach(att)
        
             
        
        try:
            if self.smtp["port"]==465:
                smtpObj=smtplib.SMTP_SSL(self.smtp["host"], self.smtp["port"],timeout=30)
            else:
                smtpObj = smtplib.SMTP() 
                smtpObj.connect(self.smtp["host"], self.smtp["port"])    # 25 为 SMTP 端口号
            smtpObj.login(self.smtp["username"],self.smtp["password"])
            smtpObj.sendmail(sender, receiverlist, message.as_string())
            print ("邮件发送成功")
        except smtplib.SMTPException:
            print ("Error: 无法发送邮件")

if __name__=="__main__":
    mailhelp().send("3004638486@qq.com","测试邮件附件发送"+time.strftime("%Y%m%d%H%M%S", time.localtime()),"测试",os.path.join(os.path.dirname(os.path.realpath(__file__)),"config.json"))