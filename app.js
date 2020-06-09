var express= require('express');
var bodyparser=require('body-parser');

var app=express();
app.use(bodyparser.json());

app.get('/',(req,res)=>{
   res.send("Himanshu agrawal");
})

const port= process.env.PORT||3000;

app.listen(port,()=>{
   console.log("port started on "+port);
});
