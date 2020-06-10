const express=require('express');
const appliances=require('../models/appliance.model');
const router=new express.Router();

const id = '5ee0a1a10a3a153878d9e70d';

router.get('/',(req,res)=>{
    res.status(200).send({
      message:"Hii"
    })
})

router.get('/status/',(req,res)=>{

    if(!req.body)
      return res.status(404).json({
          message:"request body is empty"
      });
     
      
     appliances.findById({_id:id},(error,response)=>{
       if(error)
         return res.send(error);

         
       if(req.query.type=='temperature')
          res.json({
            temperature:response.temperature
          });
          else if(req.query.type=='humidity')
          res.json({
            humidity:response.humidity
          });
          else if(req.query.type=='gas_level')
          res.json({
            gas_level:response.gas_level
          });
          else if(req.query.type=='cooler')
          res.json({
            cooler:response.cooler
          });
          else if(req.query.type=='fan')
          res.json({
            fan:response.fan
          });
          else if(req.query.type=='light1')
          res.json({
            light1:response.light1
          });
          else if(req.query.type=='light2')
          res.json({
            light2:response.light2
          });
          else if(req.query.type=='light3')
          res.json({
            light3:response.light3
          });
          else if(req.query.type=='motion')
          res.json({
            motion:response.motion
          });
          else
            res.status(500).json({
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