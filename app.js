var express= require('express');
const https = require('https');
var bodyparser=require('body-parser');
require('./mongodbconnect');
var app=express();
const path=require('path');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
var approuter=require('./routes/appliances.routes');
var userrouter=require('./routes/user.routes');
app.use(express.static('public'));

app.use(approuter);
app.use(userrouter);

const port= process.env.PORT||2000;

app.listen(port,()=>{
   console.log("port started on "+port);
});
