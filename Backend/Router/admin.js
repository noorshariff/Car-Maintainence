const express=require('express');
const router=express.Router();
const adminController=require('../controller/admin');


router.post('/cardata',adminController.postCarData);

router.get('/getData',adminController.getCarData);

router.post('/update',adminController.updateCarData);

router.delete('/delete/:id',adminController.deleteCarData)





module.exports=router;