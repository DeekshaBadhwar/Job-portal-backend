const Sequelize=require('sequelize')

const  sequelize= require('../util/database')

const Registered_employees_mediadata =sequelize.define('Registered_employees_mediadata',{
    employee_mediadata_id:{
            type:Sequelize.INTEGER,
            primaryKey:true,  
            autoIncrement:true
    },
    profile_pic:{
        type:Sequelize.STRING,
    }
})


module.exports=Registered_employees_mediadata