const sequelize=require('../util/database')
const {Sequelize}=require('sequelize')

const  db={}

db.sequelize=sequelize
db.Sequelize=Sequelize

db.registered_employee_details=require('../models/registered_employee_details')
db.registered_employees=require('../models/registered_employees')
db.registered_employees_mediadata=require('../models/registered_employees_mediadata')
db.registered_recruiters=require('../models/registered_recruiters')
db.recruiters_jobposts=require('../models/recruiter_jobposts')
db.applied_jobs=require('../models/applied_jobs')



db.registered_employees.hasOne(db.registered_employee_details,{
    foreignKey:'id'
})

db.registered_employees.hasOne(db.registered_employees_mediadata,{
    foreignKey:'id'
})

db.registered_recruiters.hasMany(db.recruiters_jobposts,{
    foreignKey:'id'
})

db.registered_recruiters.hasMany(db.applied_jobs,{
    foreignKey:'recruiter_id',
    targetkey:'id'
})

db.registered_employees.hasMany(db.applied_jobs,{
    foreignKey:'employee_id',
    targetKey:'id'
})

module.exports=db
