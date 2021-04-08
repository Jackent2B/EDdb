//Code to put data from excel sheet to mongodb automatically

// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const Course = require('../models/course');
// const fetch = require('node-fetch');

// router.get('/add', (req, res, next) => {
//   // const { domain, course, offered_by, ratings } = req.body;
//   // if (!course || !offered_by || !ratings)
//   //   return res.status(422).json({ error: 'Please Provide all the fields' });

//   async function getCourseData() {
//     const res = await fetch(
//       'https://sheet.best/api/sheets/87dbdd2f-c75a-44cd-974b-1d4aef93ddda'
//     );
//     var data = await res.json();
//     console.log(data);
//     data
//       .forEach((data) => {
//         Course.create({
//           domain: data.domain.toLowerCase(),
//           course: data.course.toLowerCase(),
//           offered_by: data.offered_by.toLowerCase(),
//           ratings: data.ratings,
//         })
//           .then((course) => {
//             res.json({ message: 'Details Submitted Successfully' });
//           })
//           .catch((error) => {
//             res.json({ error: 'Error occurred, Please try again!' });
//           });
//       })
//       .then((course) => {
//         res.json({ message: 'Data submitted to mongodb' });
//       })
//       .catch((error) => {
//         res.json({ error: 'Error occurred, Please try again!' });
//       });
//   }
//   getCourseData();
// });

// module.exports = router;
