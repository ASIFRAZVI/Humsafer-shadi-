const express= require('express')

//router object
const router=express.Router()


const clientController = require('../controllers/clientController');

router.post('/clientregistration',  clientController.createclient);
 router.get('/getallclients',clientController.getclients);
// router.delete('/expences/:id', auth, expenceController.deleteexpence);


module.exports=router;