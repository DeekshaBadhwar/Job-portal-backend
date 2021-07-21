var express=require('express')
var router=express.Router()
var pic_upload=require('../controllers/profile_pic')

var userCtrl=require('../controllers/userControllers')


router.post('/employees',userCtrl.employees)
router.post('/edetails',userCtrl.employee_details)
router.post('/media',pic_upload.single('filename'),userCtrl.media_data)
router.get('/findemployees/:id',userCtrl.findemployees)
router.put('/employeeupdate/:id',userCtrl.update_employee)
router.put('/updatedetails/:employees_details_Id',userCtrl.update_details)


router.delete('/employees/edelete/:id',userCtrl.delete_employee)
module.exports = router