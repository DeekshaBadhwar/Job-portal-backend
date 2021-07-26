const joi =require('@hapi/joi')


const auth_register_employee = joi.object({
    email:joi.string().lowercase().required(),
    first_name:joi.string().required().lowercase(),
    last_name:joi.string().required().lowercase(),
    gender:joi.string().required().lowercase(),
    password:joi.string().required()
})

const auth_register_employee_details = joi.object({
 contact:joi.number().required(),
 nationality:joi.string().required().lowercase(),
 state:joi.string().required().lowercase(),
 hometown:joi.string().required().lowercase(),
 currentlocation:joi.string().required().lowercase(),
 qualification:joi.string().required().lowercase(),
 technologies:joi.string().required().lowercase(),
 experience:joi.string().required()
})

const update_register_employee = joi.object({
    email:joi.string().lowercase().required(),
    first_name:joi.string().required().lowercase(),
    last_name:joi.string().required().lowercase(),
    gender:joi.string().required().lowercase(),
})

const auth_applied_jobs = joi.object({
    recruiter_id:joi.number().required(),
    Applied_role:joi.string().required(),
    experience:joi.string().required(),
    skills:joi.string().required(),
    job_location:joi.string().required(),
    package:joi.string().required(),
    job_type:joi.string().required(),
})
const auth_recruiter_register = joi.object({
    
    company_name:joi.string().required(),
    email:joi.string().required(),
    industry_experience:joi.string().required(),
    technologies:joi.string().required(),
    mobile_number:joi.number().required(),
    company_website:joi.string().required(),
    password:joi.string().min(5).required(),

})

const auth_recruiter_update = joi.object({
    company_name:joi.string().required(),
    email:joi.string().required(),
    industry_experience:joi.string().required(),
    technologys:joi.string().required(),
    mobile_number:joi.number().required(),
    company_website:joi.string().required(),
})

const auth_recruiter_jobpost = joi.object({
    job_role:joi.string().required(),
    experience:joi.string().required(),
    skills:joi.string().required(),
    job_location:joi.string().required(),
    package:joi.string().required(),
    job_type:joi.string().required(),
})

    

module.exports = {
    auth_register_employee,
    auth_recruiter_register,
    auth_recruiter_update,
    auth_recruiter_jobpost,
    auth_register_employee_details,
    update_register_employee,
    auth_applied_jobs
}