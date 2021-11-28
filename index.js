const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const authRouter = require('./routes/auth');
const courseRouter = require('./routes/courseContent');
const { mongoURL } = require('./config/keys');
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 
}
app.use(cors(corsOptions));

mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('database connected');
  })
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/auth', authRouter);
app.use('/course', courseRouter);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'success-client', 'build', 'index.html')
    );
  });
}

app.listen(PORT, process.env.IP, () => {
  console.log('server is running');
});
