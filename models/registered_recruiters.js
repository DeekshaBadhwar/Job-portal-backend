const Sequelize=require('sequelize')

const  sequelize= require('../util/database')

const Registered_recruiters =sequelize.define('Registered_recruiters',{
  
    id:{
        type:Sequelize.INTEGER,
       primaryKey:true
    },
    company_name:{
        type:Sequelize.STRING,
    },
    industry_experience:{
        type:Sequelize.STRING,
    },
   technologies:{
        type:Sequelize.STRING,
    },
   mobile_number:{
        type:Sequelize.INTEGER
    },
   company_website:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
   
})


module.exports=Registered_recruiters