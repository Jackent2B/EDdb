const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Course = require("../models/course");
const Recommended = require("../models/recommended");
const fetch = require("node-fetch");
const { PythonShell } = require("python-shell");
const verifyToken = require("../middleware/VerifyToken");

router.get("/add", (req, res, next) => {
  async function getCourseData() {
    const res = await fetch(
      "https://sheet.best/api/sheets/87dbdd2f-c75a-44cd-974b-1d4aef93ddda"
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
            res.json({ message: "Details Submitted Successfully" });
          })
          .catch((error) => {
            res.json({ error: "Error occurred, Please try again!" });
          });
      })
      .then((course) => {
        res.json({ message: "Data submitted to mongodb" });
      })
      .catch((error) => {
        res.json({ error: "Error occurred, Please try again!" });
      });
  }
  getCourseData();
});

router.post("/", (req, res, next) => {
  const { domain, course, offeredBy, duration, cost, assessments, rating } =
    req.body;

  if (
    !domain ||
    !duration ||
    !cost ||
    !assessments ||
    !rating ||
    !course ||
    !offeredBy
  )
    return res.status(400).json({ message: "Please provide all the fields" });

  const nc = new Course({
    domain,
    ratings: rating,
    course,
    offered_by: offeredBy,
  });

  if (duration.startsWith("0")) nc.zero_to_5 = 1;
  else if (duration.startsWith("5")) nc.five_to_10 = 1;
  else if (duration.startsWith("10")) nc.ten_to_15 = 1;
  else if (duration.startsWith("15")) nc.fifteen_to_20 = 1;
  else if (duration.startsWith("20")) nc.twenty_to_40 = 1;
  else nc.greater_than_40 = 1;

  if (cost.startsWith("0")) nc.zero_to_500 = 1;
  else if (cost.startsWith("500")) nc.fivehundred_to_1000 = 1;
  else if (cost.startsWith("1000")) nc.thousand_to_2000 = 1;
  else if (cost.startsWith("2000")) nc.twothousand_to_5000 = 1;
  else nc.greater_than_5000 = 1;

  if (assessments.startsWith("0")) nc.zero_to_10 = 1;
  else if (assessments.startsWith("10")) nc.ten_to_25 = 1;
  else if (assessments.startsWith("25")) nc.twentyfive_to_50 = 1;
  else if (assessments.startsWith("50")) nc.fifty_to_100 = 1;
  else nc.greater_than_100 = 1;

  async function postCourseData() {
    const res = await fetch(
      "https://sheet.best/api/sheets/87dbdd2f-c75a-44cd-974b-1d4aef93ddda",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nc),
      }
    );
    if (res.ok) console.log("Successful!");
    else {
      const data = await res.json();
      console.log(data);
    }
  }

  nc.save()
    .then((nc) => {
      res.json({ message: "Submitted successfully!" });
      // postCourseData();
    })
    .catch((err) => res.status(400).json({ message: "Something went wrong!" }));
});

router.post("/test/script", verifyToken, (req, res) => {
  const { arg_domain, arg_budget, arg_time, arg_assignment } = req.body;
  let options = {
    mode: "text",
    args: [arg_domain, arg_budget, arg_time, arg_assignment],
  };
  PythonShell.run("recommenderSystem.py", options, function (err, results) {
    if (err) throw err;
    console.log("finished");
    const recs = JSON.parse(results[1]);
    const nor = results[0];
    for (const course of recs) {
      const newrec = new Recommended({
        userid: req.user._id,
        name: course.coursename,
        domain: course.domain,
        offered_by: course.offeredby,
        predicted_rating: results[2]
      });
      newrec.save();
    }
    res.json({
      no_of_recommendations: nor,
      recommendations: recs,
      predicted_rating: results[2],
    });
  });
});

router.get("/recommendations/all", async (req, res) => {
  const courses = await Recommended.find({});
  res.json(courses);
});

router.get("/recommendations/user", verifyToken, async (req, res) => {
  const { _id } = req.user;
  const courses = await Recommended.find({ userid: _id });
  res.json(courses);
});

module.exports = router;
