const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const passportSetup = require('./config/passport-setup');

const {
  setHeaders,
  catchClientErrors,
  catchAllErrors,
  addMockStudy,
} = require('./api/handlers/app-handlers');

const indexRoutes = require('./api/routes');
const authRoutes = require('./api/routes/auth-routes');
const studyRoutes = require('./api/routes/study-routes');

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('db connected');
  // addMockStudy();
});

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRoutes);
app.use('/', indexRoutes);
app.use('/study', studyRoutes);

app.use(setHeaders);
app.use(catchClientErrors);
app.use(catchAllErrors);

module.exports = app;
