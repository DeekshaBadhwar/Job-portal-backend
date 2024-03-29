var express=require('express')
var router=express.Router()
var pic_upload=require('../controllers/profile_pic')
const authenticateJWT=require('../middleware/recruiterJwtToken')
const verify = require('../middleware/jwtVerifyToken')
var userCtrl=require('../controllers/userControllers')
const passport=require('passport')
router.post('/employees',userCtrl.employees)
router.post('/edetails',userCtrl.employee_details)
router.post('/media',pic_upload.single('filename'),userCtrl.media_data)
router.post('/login',passport.authenticate('local-employee',{
  
  session: false
}),userCtrl.userlogin);
router.post('/reclogin',passport.authenticate('local-recruiter',{
  
  session: false
}),userCtrl.recriterlogin);

router.get('/applicant',authenticateJWT.verifytoken,userCtrl.applicants);
router.get('/findemployees',verify.verfiytoken,userCtrl.get_employees)
router.put('/employeeupdate/:id',userCtrl.update_employee)
router.put('/updatedetails/:employees_details_Id',userCtrl.update_details)
router.post('/postjobs',userCtrl.postjobs)
router.put('/update/postjobs/:job_id',userCtrl.update_postjobs)
router.get('/getpostjobs/:job_id',userCtrl.get_postjobs)
router.delete('/deletepostjobs/:job_id',userCtrl.delete_postjobs)
router.post('/addrecruiter',userCtrl.add_recruiters)
router.put('/updater/:id',userCtrl.update_recruiters)
router.delete('/employees/edelete/:id',userCtrl.delete_employee)
router.delete('/deleterec/:id',userCtrl.delete_recruiter)
router.get('/getrecruiter',authenticateJWT.verifytoken, userCtrl.get_recruiter)

router.post('/appliedjobs',userCtrl.appliedjobs)
module.exports = router