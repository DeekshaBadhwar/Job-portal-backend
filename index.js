const express=require('express')
const sequelize=require('./util/database')
const router =require('./routes/userRoutes')
const db=require('./models')
const bodyparser=require('body-parser')
const app =express()

db.sequelize.sync()

app.use(bodyparser.urlencoded({extended:true}))
app.use('/',router)
app.listen(5000,err=>{
    console.log("server is running at ")
})