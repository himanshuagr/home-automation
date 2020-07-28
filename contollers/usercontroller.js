const usermodel=require('../models/user.model');
const jwt=require('jsonwebtoken');
const config=require('../config/jsontoken');
const accesskey=require('../config/accesskey')

exports.userLogin=async (req,res)=>{

   var mobile=req.body.mobile;
   await usermodel.findOne({mobile:mobile}).then((user)=>{
    var token=jwt.sign({mobile: user.mobile, name:user.name}, config.jwtPrivateKey);
    res.status(200).header('x-auth-token',token).send({
        "message":"user login successfully"
    })

   }).catch((error)=>{
         res.status(401).send(error);
   })

};
exports.userRegister=async (req,res)=>{

       if(req.body)
       {
              await usermodel.findOne({mobile:req.body.mobile}).then((user)=>{
                  res.status(401).send({
                      "message":"user already registered"
                  })
              }).catch((error)=>{
                res.status(401).send({
                    "message":"Database error"
                })
              })
                var newUser=new usermodel(req.body);
                await newUser.save().then((user)=>{
                    var token=jwt.sign({mobile: user.mobile, name:user.name}, config.jwtPrivateKey);
                    res.status(200).header('x-auth-token',token).send({
                        "message":"user registered successfully"
                    })
                }).catch((error)=>{
                    res.status(401).send(error);
                })
       }
       else
         res.status(401).send({
             "message":"request body is missing"
         })

};

