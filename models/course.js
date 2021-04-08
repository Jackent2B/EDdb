const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
  domain: {
    type: String,
    require: true,
  },
  course: {
    type: String,
    require: true,
  },
  offered_by: {
    type: String,
    require: true,
  },
  // course duration range
  zero_to_5: {
    type: Number,
    default: 0,
  },
  five_to_10: {
    type: Number,
    default: 0,
  },
  ten_to_15: {
    type: Number,
    default: 0,
  },
  fifteen_to_20: {
    type: Number,
    default: 0,
  },
  twenty_to_40: {
    type: Number,
    default: 0,
  },
  greater_than_40: {
    type: Number,
    default: 0,
  },
  //price range
  zero_to_500: {
    type: Number,
    default: 0,
  },
  fivehundred_to_1000: {
    type: Number,
    default: 0,
  },
  thousand_to_2000: {
    type: Number,
    default: 0,
  },
  twothousand_to_5000: {
    type: Number,
    default: 0,
  },
  greater_than_5000: {
    type: Number,
    default: 0,
  },
  ratings: {
    type: Number,
    require: true,
    max: 10,
    min: 0,
  },
  // No. of assignments range
  zero_to_10: {
    type: Number,
    default: 0,
  },
  ten_to_25: {
    type: Number,
    default: 0,
  },
  twentyfive_to_50: {
    type: Number,
    default: 0,
  },
  fifty_to_100: {
    type: Number,
    default: 0,
  },
  greater_than_100: {
    type: Number,
    default: 0,
  },
});

const Course = mongoose.model('course', courseSchema);
module.exports = Course;
