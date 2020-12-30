require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const moment = require('moment');

const {
  setHeaders,
  catchClientErrors,
  catchAllErrors,
  addMockStudy,
} = require('./api/handlers/app-handlers');

const indexRoutes = require('./api/routes');
const testRoutes = require('./api/routes/test');

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('db connected');
  addMockStudy();
});

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

app.use('/', indexRoutes);
app.use('/test', testRoutes);

app.use(setHeaders);
app.use(catchClientErrors);
app.use(catchAllErrors);

module.exports = app;
