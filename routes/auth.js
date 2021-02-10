const express = require('express');
const app = express();
const router = express.Router();
const { User } = require('../models/user');

router.post('/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, userData) => {
    if (err) return res.status(408).json({ success: false, err });
    else return res.status(200).json({ success: true });
  });
});

module.exports = router;
