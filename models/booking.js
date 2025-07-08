const mongoose = require('mongoose');

const { schema } = mongoose;


//  User Schema
const bookingSchema = new mongoose.Schema({
 user:  string ,
  name: String,
  email: String,
  date: String,
  service: String
});


   const Booking = mongoose.model('booking', bookingSchema);


   module.exports=Booking;
