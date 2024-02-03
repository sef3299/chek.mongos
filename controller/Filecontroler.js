const users=require('../model/Model')
exports.adduser=async (req,res)=>{
    try{
        const user=new users(req.body)
        await user.save()
        res.status(200).send({massage:'user succesfully added',user})


    }catch(error){
        res.status(500).send({massage:'errorcr',error})

    }
}
exports.getuser=async(req,res)=>{
    try{
        const allusers=await users.find()
        res.status(200).send({message:'all users',allusers})
    } catch{
        res.status(500).send({message:'failed to get',error})
    }
}
exports.deleteuser=async(req,res)=>{
    try{
        const user=await users.findByIdAndDelete(req.params.id)
        res.status(200).send({message:'user succesfuly delete',user})
    }catch{
        res.status(500).send({message:'failed to delete',error})

    }
}
exports.updateteuser=async(req,res)=>{
    try{
        const user=await users.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).send({message:'user succesfuly update',user})
    }catch{
        res.status(500).send({message:'failed to update',error})
    }
}