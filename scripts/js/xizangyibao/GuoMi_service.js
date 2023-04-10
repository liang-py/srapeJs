const express = require('express')
const app = express() // 创建express对象
const sm = require('./xizangyibao/GuoMi_xizang') // 导入文件
const port = 3000 // 设置服务端口


app.post('/encryto', (req,res)=>{
    var data = req.data
    console.log(data)
    enc = getEnc(data)
    res.send(enc)
})

app.get('/', (req,res)=>{
    res.send('kkk')
})

app.listen(port, ()=>{
    console.log(`app listen on port ${port}`)
    // console.log(`app listen on port ${}`)
})