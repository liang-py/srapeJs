var express =require('express')
var sdk = require('./encdata.js')
var bodyParser = require('body-parser')
const {i} = require("./encdata");
var app =express()

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: false
    }
))

app.get('/', function (req, res){
    var enc = sdk.i()
    res.send(enc)
})

var server = app.listen(8090, function (){
    console.log('111')
})