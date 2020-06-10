var express= require('express');
var bodyparser=require('body-parser');
require('./mongodbconnect');
var app=express();
app.use(bodyparser.json());
var approuter=require('./routes/appliances.routes');
app.use(approuter);

const port= process.env.PORT||3000;

app.listen(port,()=>{
   console.log("port started on "+port);
});
