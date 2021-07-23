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
 technologys:joi.string().required().lowercase(),
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

module.exports = {
    auth_register_employee,
    auth_register_employee_details,
    update_register_employee,
    auth_applied_jobs
}