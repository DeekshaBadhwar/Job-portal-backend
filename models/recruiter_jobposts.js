const Sequelize=require('sequelize')

const  sequelize= require('../util/database')

const Recruiters_jobposts =sequelize.define('recruiters_jobposts',{
  
    job_id:{
        type:Sequelize.INTEGER,
       primaryKey:true
    },
    job_role:{
        type:Sequelize.STRING,
    },
    experience:{
        type:Sequelize.STRING,
    },
   skills:{
        type:Sequelize.STRING,
    },
   job_location:{
        type:Sequelize.STRING
    },
  package:{
        type:Sequelize.INTEGER
    },
    job_type:{
        type:Sequelize.STRING
    },

})


module.exports=Recruiters_jobposts