const mongoose =require('mongoose');

const user=mongoose.model('appliances',{
    
    light1:{
        type:Boolean
    },
    light2:{
        type:Boolean
    },
    light3:{
        type:Boolean
    },
    fan:{
        type:Boolean
    },
    cooler:{
        type:Boolean
    },
    motion_detected:{
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
        type:Numebr
    }
    

});
module.exports=user;