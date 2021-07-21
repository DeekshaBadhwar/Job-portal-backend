const sequelize=require('../util/database')
const db=require('../models')
const { Sequelize } = require('sequelize')
const applied_jobs=db.applied_jobs
const recruiter_jobposts =db.recruiter_jobposts
const registered_employee_details=db.registered_employee_details
const registered_employees=db.registered_employees
const registered_recruiters=db.registered_recruiters
const registered_employees_mediadata=db.registered_employees_mediadata

exports.employees=(req,res)=>{
    const employees={
    
                id:req.body.id,
                email:req.body.email,
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                gender:req.body.gender,
                password:req.body.password
            }
    registered_employees.create(employees).
    then((data)=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })
    }

    exports.employee_details=(req,res)=>{
        console.log(req.body)
        const employee_details={
            employees_details_Id:req.body.employees_details_Id,
            contact:req.body.contact,
            nationality:req.body.nationality,
            state:req.body.state,
             hometown:req.body.hometown,
            currentlocation:req.body.currentlocation,
            qualification:req.body.qualification,
            experience:req.body.experience,
            technologies:req.body.technologies
        }
registered_employee_details.create(employee_details)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.send(err)
        })
    }

exports.media_data=(req,res)=>{
    const media_data={
        employee_mediadata_id:req.body.employee_mediadata_id,
        profile_pic:req.file.filename
    }
    registered_employees_mediadata.create(media_data)
    .then((data)=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.delete_employee= async (req,res)=>{
    const delete_employee=await 
    registered_employees
    .destroy({where:{id:req.params.id}})
    res.send({
        message:"user deleted",
        data:delete_employee
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.findemployees= async (req,res)=>{
    const findemployee=await 
    registered_employees
    .findAll({where:{id:req.params.id}})
    res.send({
        message:"user deltails",
        data:findemployee
    })
}

//update

exports.update_employee = async (req,res)=>{
    try{
 const update_employee = await registered_employees.update({
    email:req.body.email,
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    gender:req.body.gender,
    password:req.body.password
 },{where:{id:req.params.id}});
 return res.status(200).send({
     update_employee,
     message:"user is updated"
 })
}
catch(error){
  return res.status(400).send({
  message:"there is some error",
  status:400,
  errors:error
 })
}
}



exports.update_details = async (req,res)=>{
    try{
 const update_details = await registered_employee_details.update({
    employees_details_Id:req.body.employees_details_Id,
    contact:req.body.contact,
    nationality:req.body.nationality,
    state:req.body.state,
     hometown:req.body.hometown,
    currentlocation:req.body.currentlocation,
    qualification:req.body.qualification,
    experience:req.body.experience,
    technologies:req.body.technologies
 },{where:{employees_details_Id:req.params.employees_details_Id}});
 return res.status(200).send({
     user:update_details,
     message:"user is updated"
 })
}
catch(error){
  return res.status(400).send({
  message:"there is some error",
  status:400,
  errors:error
 })
}
}



