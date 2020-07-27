const mongoose=require('mongoose');
const validator=require('validator');

const userschema=mongoose.Schema({

        name:{
            type:String,
            required:true,
            trim:true,
            lowercase:true
        },
        mobile:{
            type:String,
            required:true,
            trim:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }

});

module.exports=mongoose.model('userdata',userschema);