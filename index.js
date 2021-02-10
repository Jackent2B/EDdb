const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { User } = require('./models/user');
const authRouter = require('./routes/auth');
const db =
  'mongodb+srv://eddb_admin:eddbadmin@eddb.g0abl.mongodb.net/eddb?retryWrites=true&w=majority';

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('database connected');
  })
  .catch((err) => clg(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/auth', authRouter);

app.listen(3000, (req, res) => {
  console.log('server is running');
});
