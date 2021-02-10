const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db =
  'mongodb+srv://eddb_admin:eddbadmin@eddb.g0abl.mongodb.net/eddb?retryWrites=true&w=majority';

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('database connected');
  })
  .catch((err) => clg(err));

app.get('/hello', (req, res) => {
  res.send('Hello there');
});

app.listen(3000, (req, res) => {
  console.log('server is running');
});
