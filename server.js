const express=require('express')
const conectDB = require('./configuration/Confuguration')
const userRouter = require('./router/Router')

const app =express()
const port=5000
app.use(express.json())
conectDB()
app.use('/user',userRouter)
app.listen(port,console.log('server is running'))
