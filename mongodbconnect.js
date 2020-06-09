const mongoose=require('mongoose');
const databseurl=require('./config/databse.config');
mongoose.connect(databseurl.url,{
    useCreateIndex:true,
    useNewUrlParser:true
}).then(()=>console.log("database connected successfully"))
.catch((error)=>{
    console.log(error);
})