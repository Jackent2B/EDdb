//Code to put data from excel sheet to mongodb automatically

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Course = require('../models/course');
const fetch = require('node-fetch');

router.get('/add', (req, res, next) => {
  async function getCourseData() {
    const res = await fetch(
      'https://sheet.best/api/sheets/87dbdd2f-c75a-44cd-974b-1d4aef93ddda'
    );
    var data = await res.json();
    console.log(data);
    data
      .forEach((data) => {
        Course.create({
          domain: data.domain.toLowerCase(),
          course: data.course.toLowerCase(),
          offered_by: data.offered_by.toLowerCase(),
          ratings: data.ratings,
          zero_to_5: data.zero_to_5,
          five_to_10: data.five_to_10,
          ten_to_15: data.ten_to_15,
          fifteen_to_20: data.fifteen_to_20,
          twenty_to_40: data.twenty_to_40,
          greater_than_40: data.greater_than_40,
          zero_to_500: data.zero_to_500,
          fivehundred_to_1000: data.fivehundred_to_1000,
          thousand_to_2000: data.thousand_to_2000,
          twothousand_to_5000: data.twothousand_to_5000,
          greater_than_5000: data.greater_than_5000,
          zero_to_10: data.zero_to_10,
          ten_to_25: data.ten_to_25,
          twentyfive_to_50: data.twentyfive_to_50,
          fifty_to_100: data.fifty_to_100,
          greater_than_100: data.greater_than_100,
        })
          .then((course) => {
            res.json({ message: 'Details Submitted Successfully' });
          })
          .catch((error) => {
            res.json({ error: 'Error occurred, Please try again!' });
          });
      })
      .then((course) => {
        res.json({ message: 'Data submitted to mongodb' });
      })
      .catch((error) => {
        res.json({ error: 'Error occurred, Please try again!' });
      });
  }
  getCourseData();
});

module.exports = router;
