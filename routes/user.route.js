var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user.controller');

router.post('/register',function(req,res){
  UserController.create(req,res);
});

router.post('/login',function(req,res){
  UserController.login(req,res);
});

router.get('/session',function(req,res){
  UserController.userLogged(req,res);
});

router.get('/',function(req,res){
  UserController.getUsers(req,res);
});

module.exports = router;
