import express from 'express'
const router = express.Router()
import { homepageController } from '../controllers/homepageController.js'
import { adminloginController } from '../controllers/adminloginController.js'
import  {AddteacherController}  from '../controllers/AddteacherController.js'
import {TeacherlistController}  from '../controllers/TeacherlistController.js'
import { postingController } from '../controllers/postingController.js'
// import {EditteacherController } from '../controllers/EditteacherController.js'
router.get('/', homepageController)
// router.get('/services', servicesController)
router.get('/adminlogin', adminloginController.loginhome)
router.post('/adminlogin', adminloginController.verifylogin)
router.get('/adminlogin/register', adminloginController.registration)
router.post('/adminlogin/createDoc', adminloginController.createUserDoc)
router.get('/Addteacher',AddteacherController.getAllDoc)
router.post('/Addteacher',AddteacherController.createDoc)
router.get('/Teacherlist',TeacherlistController.getAllDoc)
router.get('/Teacherlist/edit/:id', TeacherlistController.editDoc) //here id is the Route parameters which value can be captured with the help of req.params

router.post('/Teacherlist/update/:id', TeacherlistController.updateDocById)
router.post('/Teacherlist/delete/:id', TeacherlistController.deleteDocById)
router.get('/posting', postingController)
// router.get('/Editteacher/:id', EditteacherController.editDoc);
// router.post('/Editteacher/:id/update', EditteacherController.updateDocById); // Changed route for update
// router.post('/Editteacher/:id/delete', EditteacherController.deleteDocById); // Changed route for delete

export default router