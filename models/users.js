const mongoose = require('mongoose');

const { Schema } = mongoose;


//  User Schema
const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true
  }
  ,
    username: {
    type: String,
    unique: true,
    required: true
  }
});


   const User = mongoose.model('User', userSchema);


   module.exports=User;
