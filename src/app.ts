import path from 'path';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
require('dotenv').config();

import { catchClientErrors, catchAllErrors } from './api/handlers/app-handlers';

import indexRoutes from './api/routes';
import authRoutes from './api/routes/auth-routes';
import studyRoutes from './api/routes/study-routes';

mongoose.connect(process.env.DB_URL || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('db connected');
  // withGeolocation.forEach(addMockStudy);
});

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRoutes);
app.use('/', indexRoutes);
app.use('/study', studyRoutes);

app.use(catchClientErrors);
app.use(catchAllErrors);

export default app;
