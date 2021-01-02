const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const passport = require('passport');
require('./config/passport-setup');
const mockStudies = require('./mock-studies');

const {
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
  // mockStudies.forEach(addMockStudy);
});

const cookies = cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.SESSION_COOKIE_KEY],
});

const app = express();

app.use(cors({ credentials: true, origin: process.env.CLIENT_ADDRESS }));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// app.use(cookies);
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/', indexRoutes);
app.use('/study', studyRoutes);

app.use(catchClientErrors);
app.use(catchAllErrors);

module.exports = app;
