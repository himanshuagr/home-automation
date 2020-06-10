const mongoose=require('mongoose');
const appliance=require('./models/appliance.model');
const databaseconfig=require('./config/databse.config');
mongoose.connect(process.env.MONGODB_URI || databaseconfig.url,{
    useCreateIndex:true,
    useNewUrlParser:true
}).then(()=>console.log("database connected successfully"))
.catch((error)=>{
    console.log(error);
});


