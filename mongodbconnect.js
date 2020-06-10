const mongoose=require('mongoose');
const appliance=require('./models/appliance.model');
const mongourl="mongodb+srv://him9875:hyx110@home-automation-isox0.gcp.mongodb.net/appliances?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI,{
    useCreateIndex:true,
    useNewUrlParser:true
}).then(()=>console.log("database connected successfully"))
.catch((error)=>{
    console.log(error);
});


