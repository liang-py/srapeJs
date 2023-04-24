const express = require('express')
const app = express() // 创建express对象
var sdk = require('./GuoMi_xizang.js')
var bodyParser = require('body-parser')
const port = 3000 // 设置服务端口


app.get('/Header', (req,res)=>{
    // var data = req.data
    // console.log(data)
    headers = getHeader()
    res.send(headers)
})

app.get('/', (req,res)=>{
    res.send('kkk')
})

app.listen(port, ()=>{
    console.log(`app listen on port ${port}`)
    // console.log(`app listen on port ${}`)
})