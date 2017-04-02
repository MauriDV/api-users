var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new Schema({
  username:{type:String,unique:true},
  password:String,
  userSince:Date,
  lastConnection:Date,
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User',UserSchema);

module.exports.user = User;
module.exports.userSchema = UserSchema;
