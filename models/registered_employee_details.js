const Sequelize=require('sequelize')

const  sequelize= require('../util/database')

const Registered_employees_details =sequelize.define('Registered_employees_details',{
   id:{
            type:Sequelize.INTEGER,
            primaryKey:true,  
            autoIncrement:true
    },
    contact:{
        type:Sequelize.INTEGER,
       
    },
    nationality:{
        type:Sequelize.STRING,
    },
    state:{
        type:Sequelize.STRING,
    },
    hometown:{
        type:Sequelize.STRING,
    },
   currentlocation:{
        type:Sequelize.STRING
    },
    qualification:{
        type:Sequelize.STRING
    },
    experience:{
        type:Sequelize.STRING
    },
    technologies:{
        type:Sequelize.STRING
    }
})


module.exports=Registered_employees_details