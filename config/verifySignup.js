const db=require('../models')
const bcrypt=require('bcrypt')
const passport=require('passport')
const registered_employees=db.registered_employees

checkEmail=(req,res,next)=>{
    registered_employees.findOne({
        where:{req.body.email}
    })
    .then(user=>{
        res.status()
    })
}