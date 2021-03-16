const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    minlength: 8,
    require: true,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
