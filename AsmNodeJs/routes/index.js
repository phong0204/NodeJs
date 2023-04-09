const express = require('express');
const router = express.Router();

const userController = require('../components/user/UserController');

// http:localhost:3000/ 
router.get('/', function(req, res, next){
  // hien thi trang chu
  res.render('index');


});

// http:localhost:3000/login
router.get('/login',async function(req, res, next){
  // hien thi trang login
  res.render('user/login');

});
// http:localhost:3000/login
router.post('/login',async function(req, res, next){
  
  const {email, password} = req.body;
  const result = await userController.login(email, password);
  if (result) {
    return res.redirect('/');
  } else {
    return res.redirect('/login');
  }

});



module.exports = router;
