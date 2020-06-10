const express=require('express');
const appliances=require('../models/appliance.model');
const router=new express.Router();

const id = '5ee0a1a10a3a153878d9e70d';
const port=2000;

router.get('/',(req,res)=>{
    res.status(200).send({
      message:"Hii"
    })
})

router.get('/status',(req,res)=>{

    if(!req.body)
      return res.status(404).json({
          message:"request body is empty"
      });
     
      
     appliances.findById({_id:id}).then((response)=>{
      
      console.log(response);
      console.log(req.query);
      res.send({
        messgae:"oooooo"
      })

     }).catch((error)=>{
       res.status(404).send(error);
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