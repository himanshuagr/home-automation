const express=require('express');
const appliances=require('../models/appliance.model');
const router=new express.Router();

const id = '5ee0a1a10a3a153878d9e70d';

router.get('/',(req,res)=>{
    res.send(200).send({
      message:"Hii"
    })
})

router.get('/status/',(req,res)=>{

    if(!req.body)
      return res.status(404).send({
          message:"request body is empty"
      });
     
      
     appliances.findById({_id:id},(error,response)=>{
       if(error)
         return res.send(error);
       if(req.query.type=='temperature')
          res.status(200).send({
            temperature:response.temperature
          });
          if(req.query.type=='humidity')
          res.status(200).send({
            humidity:response.humidity
          });
          if(req.query.type=='gas_level')
          res.status(200).send({
            gas_level:response.gas_level
          });
          if(req.query.type=='cooler')
          res.status(200).send({
            cooler:response.cooler
          });
          if(req.query.type=='fan')
          res.status(200).send({
            fan:response.fan
          });
          if(req.query.type=='light1')
          res.status(200).send({
            light1:response.light1
          });
          if(req.query.type=='light2')
          res.status(200).send({
            light2:response.light2
          });
          if(req.query.type=='light3')
          res.status(200).send({
            light3:response.light3
          });
          if(req.query.type=='motion')
          res.status(200).send({
            motion:response.motion
          });
          else
            res.status(500).send({
              message: "invalid query"
            })
     })
})

router.post('/switch',(req,res)=>{
  if(!req.body)
  return res.status(404).send({
      message:"request body is empty"
  });
 
  appliances.findByIdAndUpdate({_id:id},req.body).then((response)=>res.send({
    message:"successfully saved"
  }))
  .catch((error)=>res.status(502).send(error));

})
module.exports=router;