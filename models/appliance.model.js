const mongoose =require('mongoose');

const user=mongoose.model('appliances',{
    
    light1:{
        type:Boolean,
        default:false
    },
    light2:{
        type:Boolean,
        default:false,
    },
    light3:{
        type:Boolean,
        default:false
    },
    fan:{
        type:Boolean,
        default:false
    },
    cooler:{
        type:Boolean,
        default:false
    },
    motion:{
        type:Boolean,
        default:false
    },
    temperature:{
        type:Number,
        default:0,
    },
    humidity:{
        type:Number,
        default:0,
    },
    gas_level:{
        type:Number,
        default:0

    }
    

});

//const app=new user({});
//app.save().then(()=>console.log("database saved successfully")).catch((error)=>console.log(error));
module.exports=user;