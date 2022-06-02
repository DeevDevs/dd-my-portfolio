const mongoose = require('mongoose');
const validator = require('validator');

const visitorMessageSchema = new mongoose.Schema({
  visitorName: {
    type: String,
    required: [true, 'Please, do not forget to mention your name'],
  },
  visitorEmail: {
    type: String,
    required: [true, 'Please, do not forget to mention your email'],
    validate: [validator.isEmail, 'You have to provide a valid email address'],
  },
  visitorMessage: {
    type: String,
    required: [true, 'Please, do not forget to write the message'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// visitorMessageSchema.pre('save', function (next) {
//   // console.log(this);
//   // next();
//   // const existingEmail = visitorMessageSchema.findOne({ visitorEmail: this.visitorEmail });
//   // if (!existingEmail) return next();
//   // if (existingEmail)
//   //   return new Error({ message: 'You have already sent a message. Please, try to contact me via email.', status: 401 });
// });

const VisitorMessageModel = mongoose.model('VisitorMessages', visitorMessageSchema);

module.exports = VisitorMessageModel;
