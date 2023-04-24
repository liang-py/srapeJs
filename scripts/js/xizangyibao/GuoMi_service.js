const express = require("express")
const app = express() // 创建express对象
var sdk = require('./GuoMi_xizang.js')
var bodyParser = require('body-parser')
const port = 3000 // 设置服务端口


app.get('/Header', (req,res)=>{
    // var data = req.data
    // console.log(data)
    headers = sdk.getHeader()
    res.send(headers)
})

app.post('/encData', (req,res)=>{
    var data = req.data
    console.log(data)
    encData = sdk.getEnc(data)
    res.send(encData)
})

app.post('/decData', (req,res)=>{
    var data = req.data
    console.log(data)
    decData = sdk.getDec(data)
    res.send(decData)
})

app.get('/', (req,res)=>{
    res.send('kkk')
})

app.listen(port, ()=>{
    console.log(`app listen on port ${port}`)
    // console.log(`app listen on port ${}`)
})