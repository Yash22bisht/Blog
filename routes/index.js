var express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
var router = express.Router();
const {User} = require('../models/users.js')

const condb = async()=>{
  const conn = await mongoose.connect("mongodb://localhost:27017/Blogverse");
  console.log('connected to mongoDb');
}

condb();
router.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  
});

router.get('/login',(req,res)=>{
  res.render('login',{msg:""})
})

router.post('/check',async (req,res)=>{
  const {email,Password} = req.body;
  const user = await User.findOne({email:email,password:Password})
  if(user){
      res.redirect('/')
  }
  else{
      res.redirect('/login?error=wrongPassword')
      }
})

router.get('/register',(req,res)=>{
  res.render('register')
})

router.post('/registering',(req,res)=>{
  const username = req.body.Username;
  const email = req.body.email;
  const password = req.body.Password;

  let user = new User({
    name: username ,
    email: email ,
    password: password
  })
  user.save();
  res.redirect('/')

})

router.get('/aboutus',(req,res)=>{
  res.render('aboutus')
})
router.get('/contact',(req,res)=>{
  res.render('contact')
})

router.get('/thank',(req,res)=>{
  res.render('thank')
})

module.exports = router;

