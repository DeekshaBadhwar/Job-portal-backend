const Sequelize=require('sequelize')

const  sequelize= require('../util/database')

const Registered_employees =sequelize.define('Registered_employees',{
    id:{
            type:Sequelize.INTEGER,
            primaryKey:true,  
            autoIncrement:true
    },
    email:{
        type:Sequelize.STRING,
       
    },
    first_name:{
        type:Sequelize.STRING,
    },
    last_name:{
        type:Sequelize.STRING,
    },
    gender:{
        type:Sequelize.STRING,
    },
    password:{
        type:Sequelize.STRING
    },
})


module.exports=Registered_employees