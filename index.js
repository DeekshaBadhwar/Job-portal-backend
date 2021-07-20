const express=require('express')
const sequelize=require('./util/database')

const db=require('./models')

db.sequelize.sync({force:true}).then(()=>{
    console.log('drop and ')
})