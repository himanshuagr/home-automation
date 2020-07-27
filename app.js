var express= require('express');
var bodyparser=require('body-parser');
require('./mongodbconnect');
var app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
var approuter=require('./routes/appliances.routes');
var userrouter=require('./routes/user.routes');

app.use(approuter);
app.use(userrouter);

const port= process.env.PORT||2000;

app.listen(port,()=>{
   console.log("port started on "+port);
});
