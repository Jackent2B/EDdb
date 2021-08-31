const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_TOKEN } = require('../config/keys');
const verifyToken = require('../middleware/VerifyToken');

//for testing verify tokens
// router.get('/protected', verifyToken, (req, res, next) => {
//   res.json({ msg: 'Hey i am a protected resource' });
// });

router.post('/signup', (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(422).json({ message: 'Please add all the fields' });

  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ message: 'user with the same Id already exists' });
      } else {
        //encrypting the password to string size 12
        bcrypt.hash(password, 12).then((hashedPassword) => {
          User.create({
            name: name,
            password: hashedPassword,
            email: email.toLowerCase(),
          })
            .then((user) => {
              res.json({ message: 'Successfully signed up' });
            })
            .catch((error) => {
              res.status(400).json({ message: 'Error signing up' });
            });
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: 'Something went wrong' });
    });
});

router.post('/signin', (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(422).json({ error: 'Please add all the fields' });

  User.findOne({ email: email.toLowerCase() })
    .then((savedUser) => {
      if (!savedUser) {
        return res.status(422).json({ message: 'user does not exist' });
      } else {
        bcrypt
          .compare(password, savedUser.password)
          .then((passwordMatch) => {
            if (passwordMatch) {
              //res.json({message:"Successfully signed in"});
              const token = jwt.sign({ _id: savedUser._id }, JWT_TOKEN);
              const { _id, name, email } = savedUser;
              res.json({
                token: token,
                user: { _id, name, email },
              });
            } else res.status(400).json({ message: 'Email or Password is incorrect' });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: 'Something went wrong' });
    });
});

module.exports = router;
