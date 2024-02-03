const express = require('express')
const {adduser, getuser, deleteuser, updateteuser}=require('../controller/Filecontroler')
const userRouter=express.Router()
userRouter.get('/get',getuser)
userRouter.delete('/delete/:id',deleteuser)
userRouter.post('/add',adduser)
userRouter.put('/update/:id',updateteuser)
module.exports=userRouter; 