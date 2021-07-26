const sequelize=require('../util/database')
const db=require('../models')
const { Sequelize } = require('sequelize')
const passport=require('passport')
require('../util/verifyemployee')
require('../util/verifyrecruiter')
const applied_jobs=db.applied_jobs
const recruiters_jobposts =db.recruiters_jobposts
const registered_employee_details=db.registered_employee_details
const registered_employees=db.registered_employees
const registered_recruiters=db.registered_recruiters
const registered_employees_mediadata=db.registered_employees_mediadata
const jwt =require('jsonwebtoken')


const  {
    auth_register_employee,
    auth_register_employee_details,
    update_register_employee,
    auth_applied_jobs,
    auth_recruiter_register,
    auth_recruiter_update, 
    auth_recruiter_jobpost
}=require('../validator/auth')

const bcrypt=require('bcrypt')

//regsiter employess
exports.employees=async (req,res)=>{
    try{ 
        const valid=await auth_register_employee.validateAsync(req.body)
        const password=req.body.password
         const epassword = await bcrypt.hash(password, 10);
        const employees={    
                id:valid.id,
                email:valid.email,
                first_name:valid.first_name,
                last_name:valid.last_name,
                gender:valid.gender,
                password:epassword
            }
    registered_employees.create(employees).
    then((data)=>{
        return res.status(200).send({
            status: 200,
            data: data,
            message: "User is registered Successfully",
            token: jwt.sign({ id: data.id }, "SECRETKEY007", {
                expiresIn: "90m",
              }),
          });
        });
      } catch (error) {
        return res.status(401).send({
          status: 401,
          message: "there is some error in registered",
          error: error.message,
        });
      }
    };
    
//enter details of employees register
    exports.employee_details=(req,res)=>{
        console.log(req.body)
        const employee_details={
            id:req.body.id,
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

    exports.userlogin = async (req, res, next) => {
        passport.authenticate('local-employee', (err, user, info) => {
          if (err) res.status(404).json(err);
          if (user)
            return res.status(200).json({
              token: jwt.sign({ id: user.id }, "SECRETKEY007", {
                expiresIn: "60m",
              }),
    data:user
            });
          if (info) return res.status(401).json(info);
        })(req, res, next);
      };
      

    //enter media of employees registeres
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


//delete the employee
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

//get the employee

exports.get_employees = async (req,res)=>{
    try{
    const employees = await registered_employees.findOne({where: { id: id.id },
      include:registered_employee_details });
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

//update the employee

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


//update employee deatils
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
exports.add_recruiters=async (req,res)=>{
   try {
    
     const encryptpass= await bcrypt.hash(req.body.password,10)  
        const add_recruiters={
        id:req.body.id,
        company_name:req.body.company_name,
        email:req.body.email,
        industry_experience:req.body.industry_experience,
        technologies:req.body.technologies,
        mobile_number:req.body.mobile_number,
        company_website:req.body.company_website,
         password:encryptpass
    }
    registered_recruiters.create(add_recruiters)
    .then(data=>{
        res.send({
            data:data,
            message:"registered sucessfully",
            token: jwt.sign({ id: data.id }, "SECRETKEY1998", {
                expiresIn: "60m",
            })

        })
    })
}
catch(error){
    return res.status(401).send({
        status:401,
        message:"there is some error in the field",
        err:error
    })
}
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
    const get_recruiter = await registered_recruiters.findOne(
        {where: { id: id.id },
      include:registered_employee_details });
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


exports.recriterlogin = async (req, res, next) => {
    passport.authenticate('local-recruiter', (err, recriter, info) => {
      if (err) res.status(404).json(err);
      if (recriter)
        return res.status(200).json({
          token: jwt.sign({ id: recriter.id }, "SECRETKEY1998", {
            expiresIn: "60m",
          }),
data:recriter
        });
      if (info) return res.status(401).json(info);
    })(req, res, next);
  };
  

//applocaants
  exports.applicants = async (req,res)=>{
    try{
    const details = await applied_jobs.findOne({where:{id:id.id},
        include:registered_employees});
    return res.status(200).send({
        status:200,
        message:"all the job job apantplic",
        data:details
    })
}
catch(error){
    return res.status(404).send({
        status:400,
        message:"there is some error",
        error:error
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
