const mongoose=require('mongoose');
const databseurl=require('./config/databse.config');
const appliance=require('./models/appliance.model');

mongoose.connect(databseurl.url,{
    useCreateIndex:true,
    useNewUrlParser:true
}).then(()=>console.log("database connected successfully"))
.catch((error)=>{
    console.log(error);
});


