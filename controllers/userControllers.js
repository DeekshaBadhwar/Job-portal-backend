const sequelize=require('../util/database')
const db=require('../models')
const { Sequelize } = require('sequelize')
const applied_jobs=db.applied_jobs
const recruiters_jobposts =db.recruiters_jobposts
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

exports.get_employees = async (req,res)=>{
    try{
    const employees = await registered_employees.findOne({where :{id:req.params.id}});
    res.status(200).send({
        status:200,
        message:"details is fetch successfully ",
        data:employees
    })
}
catch(error){
    return res.status(400).send({
        status:400,
        message:"there is some error",
        errors:error
    })
}

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

//post jobs

exports.postjobs=(req,res)=>{
    const postjobs={
        job_id:req.body.job_id,
        job_role:req.body.job_role,
        experience:req.body.experience,
        skills:req.body.skills,
        job_location:req.body.job_location,
        package:req.body.package,
        job_type:req.body.job_type
    }
    recruiters_jobposts.create(postjobs)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
}

//update post
exports.update_postjobs = async (req,res)=>{
    try{
 const update_postjobs = await recruiters_jobposts.update({
    job_id:req.body.job_id,
    job_role:req.body.job_role,
    experience:req.body.experience,
    skills:req.body.skills,
    job_location:req.body.job_location,
    package:req.body.package,
    job_type:req.body.job_type
 },{where:{job_id:req.params.job_id}});
 return res.status(200).send({
     user:update_postjobs,
     message:"jobs is updated"
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


//get jobs
exports.get_postjobs = async (req,res)=>{
    try{
    const get_postjobs = await recruiters_jobposts.findOne({where :{job_id:req.params.job_id}});
    res.status(200).send({
        status:200,
        message:"dpost jobs are fetch successfully ",
        data:get_postjobs
    })
}
catch(error){
    return res.status(400).send({
        status:400,
        message:"there is some error",
        errors:error
    })
}

}

//delete post jobs
exports.delete_postjobs= async (req,res)=>{
    const delete_postjobs=await 
    recruiters_jobposts
    .destroy({where:{job_id:req.params.job_id}})
    res.send({
        message:"posted job  deleted",
        data:delete_postjobs
    })
    .catch(err=>{
        res.send(err)
    })
}


//recruider register add
exports.add_recruiters=(req,res)=>{
    const add_recruiters={
        id:req.body.id,
        company_name:req.body.company_name,
        industry_experience:req.body.industry_experience,
        technologies:req.body.technologies,
        mobile_number:req.body.mobile_number,
        company_website:req.body.company_websites
       
    }
    registered_recruiters.create(add_recruiters)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
}

// /update recruiter
exports.update_recruiters = async (req,res)=>{
    try{
 const update_recruiters = await registered_recruiters.update({
    id:req.body.id,
        company_name:req.body.company_name,
        industry_experience:req.body.industry_experience,
        technologies:req.body.technologies,
        mobile_number:req.body.mobile_number,
        
 },{where:{id:req.params.id}});
 return res.status(200).send({
     user:update_recruiters,
     message:"jobs is updated"
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

//delete recruiters

exports.delete_recruiter= async (req,res)=>{
    const delete_recruiter=await 
    registered_recruiters
    .destroy({where:{id:req.params.id}})
    res.send({
        message:"posted job  deleted",
        data:delete_recruiter
    })
    .catch(err=>{
        res.send(err)
    })
}

//get recruiter
exports.get_recruiter = async (req,res)=>{
    try{
    const get_recruiter = await registered_recruiters.findOne({where :{id:req.params.id}});
    res.status(200).send({
        status:200,
        message:"recruiter are fetch successfully ",
        data:get_recruiter
    })
}
catch(error){
    return res.status(400).send({
        status:400,
        message:"there is some error",
        errors:error
    })
}
}


//applied jobs
exports.appliedjobs=(req,res)=>{
    const appliedjobs={
        applied_id:req.body.applied_id,
        applied_role:req.body.applied_role,
        experience:req.body.industry_experience,
        skills:req.body.skills,
        package:req.body.package,
        job_type:req.body.job_type
    
    }
    applied_jobs.create(appliedjobs)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
}