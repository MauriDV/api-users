var User = require('../models/user.model').user;
var passport = require('passport');

exports.create = function(req,res){
  var u = new User();
  var date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
  u.username = req.body.username;
  u.userSince = date;
  u.lastConnection = date;
  User.register(u,req.body.password,function(err,user){
    if(err){
      res.status(401).send();
    }else{
      if(user){
        passport.authenticate('local')(req,res,function() {
            res.status(201).send();
        });
      }
    }
  });
}

exports.login = function(req,res){
  passport.authenticate('local')(req,res,function(){
    res.status(200).send();
  });
}

exports.userLogged = function(req,res){
  User.find({username:req.session.passport.username},function(err,user){
    if(err){
      res.status(404).send();
    }else{
      res.status(200).json(user);
    }
  });
}

exports.getUsers = function(req,res){
  User.find(function(err,users){
    if(err){
      res.status(404).send()
    }else{
      res.status(200).json(users);
    }
  });
}
