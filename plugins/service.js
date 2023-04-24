const express = require("express");
const app = express(); // 创建express对象
var sdk_GM = require('../scripts/js/xizangyibao/GuoMi_xizang.js')
var sdk_JSL = require('../scripts/js/jsl/jsl.js')
var bodyParser = require('body-parser')
const port = 3000; // 设置服务端口

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/GM/Header', (req,res)=>{
    // var data = req.data
    // console.log(data)
    headers = sdk_GM.getHeader()
    res.send(headers);
});

app.post('/GM/encData', (req,res)=>{
    var data = req.body
    console.log(req.body)
    encData = sdk_GM.getEnc(data)
    res.send(encData)
})

app.get('/cookie', (req,res)=>{
    var data = req.data;
    decData = sdk_JSL.Cookie(data);
    res.send(decData);
})

app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(port, () => {
    console.log(`app listen on port ${port}`)
    // console.log(`app listen on port ${}`)
})