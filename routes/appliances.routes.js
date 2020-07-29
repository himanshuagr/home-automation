const express=require('express');
const appliances=require('../models/appliance.model');
const router=new express.Router();
const keyconfig=require('../config/accesskey');


const id = '5ee0a1a10a3a153878d9e70d';
const port=2000;

/*router.get('/',(req,res)=>{
    res.status(200).json({
         message:"server running successfully"
    });
});*/
router.get('/',(req,res)=>res.download('./app-debug.apk'));


router.get('/getdata',(req,res)=>{
         
    if(!req.body)
    return res.status(404).json({
        'message':"request body is empty"
    });
   
    const key=req.header('access_key');
    if(!key)
      return res.status(401).send({
        'message':"key not defined"
      })
    if(keyconfig.access_key!=key)
    return res.status(401).send({
      'message':"wrong access key"
    })

    appliances.findById({_id:id}).exec((error,response)=>{
      if(error)
        return res.status(500).send(error);
        res.status(200).send(response);
    })
   
});


router.post('/switch',(req,res)=>{
  if(!req.body)
  return res.status(404).send({
      'message':"request body is empty"
  });
  const key=req.header('access_key');
  if(!key)
    return res.status(401).send({
      'message':"key not defined"
    })
  if(keyconfig.access_key!=key)
  return res.status(401).send({
    'message':"wrong access key"
  })
 
  appliances.findByIdAndUpdate({_id:id},req.body).then((response)=>{
    
    res.status(200).send({
      "message":"updated successfully"
    })
 
  })
  .catch((error)=>res.status(502).send(error));

});


module.exports=router;