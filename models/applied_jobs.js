const Sequelize=require('sequelize')

const  sequelize= require('../util/database')

const Applied_jobs =sequelize.define('applied_jobs',{
  
    applied_id:{
        type:Sequelize.INTEGER,
       primaryKey:true
    },
   applied_role:{
        type:Sequelize.STRING,
    },
    experience:{
        type:Sequelize.STRING,
    },
   skills:{
        type:Sequelize.STRING,
    },
   package:{
        type:Sequelize.INTEGER
    },
   job_type:{
        type:Sequelize.STRING
    }
    
})


module.exports=Applied_jobs