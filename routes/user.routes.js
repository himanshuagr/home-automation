const bcrypt=require('bcryptjs');
const express=require('express');
const usermodel=require('../models/user.model');
const usercontroller=require('../contollers/usercontroller');


const router=new express.Router();

router.post('/userRegister',usercontroller.userRegister);
router.post('/userLogin',usercontroller.userLogin);

module.exports=router;