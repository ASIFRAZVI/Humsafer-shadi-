const express= require('express')

//router object
const router=express.Router();

// const contactController=require("../controllers/contactController")
// const auth=require("../middleware/auth")

router.get('/',(req,res)=>{
    res.render("frontpage")
  })

  router.get('/about',(req,res)=>{
    res.render("about")
  })

  router.get('/contact',(req,res)=>{
    res.render("contact")
  })

  router.get('/service',(req,res)=>{
    res.render("service")
  })
  router.get('/register',(req,res)=>{
    res.render("register")
  })

  router.get('/successfull',(req,res)=>{
    res.render("successfull")
  })
module.exports=router;