const mongoose=require('mongoose')
const conectDB=async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/esra')
        console.log("database is connected")

    } catch(error){
        console.log("database is not connected")


    }
}
module.exports=conectDB