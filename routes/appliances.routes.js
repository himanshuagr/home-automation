const express=require('express');
const appliances=require('../models/appliance.model');
const router=new express.Router();

const id = '5ee0a1a10a3a153878d9e70d';
const port=2000;

router.get('/',(req,res)=>{
    res.status(200).json({
         message:"hii"
    });
});

router.get('/status',(req,res)=>{

    if(!req.body)
      return res.status(404).json({
          message:"request body is empty"
      });
     
    appliances.findById({_id:id}).exec((error,response)=>{
      if(error)
      return res.status(404).send(error);
      
     if(response)
     { 
       if(req.query.type=='temperature')
       res.status(200).json({
         temperature:response.temperature
       });
       else if(req.query.type=='humidity')
       res.status(200).json({
         humidity:response.humidity
       });
       else if(req.query.type=='gas_level')
       res.status(200).json({
         gas_level:response.gas_level
       });
       else if(req.query.type=='cooler')
       res.status(200).json({
         cooler:response.cooler
       });
       else if(req.query.type=='fan')
       res.status(200).json({
         fan:response.fan
       });
       else if(req.query.type=='light1')
       res.status(200).json({
         light1:response.light1
       });
       else if(req.query.type=='light2')
       res.status(200).json({
         light2:response.light2
       });
       else if(req.query.type=='light3')
       res.status(200).json({
         light3:response.light3
       });
       else if(req.query.type=='motion')
       res.status(200).json({
         motion:response.motion
       });
       else
         res.status(500).json({
           message: "invalid query"
         });
       }
       else
        res.send({
          message:"no response recieved"
        });
    });
});


router.post('/switch',(req,res)=>{
  if(!req.body)
  return res.status(404).send({
      message:"request body is empty"
  });
 
  appliances.findByIdAndUpdate({_id:id},req.body).then((response)=>{
    res.status(200).send(req.body);
    console.log(req.headers);
  })
  .catch((error)=>res.status(502).send(error));

});


module.exports=router;