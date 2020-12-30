const mockStudies = require('../../mock-studies');
const Study = require('../models/study');

exports.setHeaders = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'OPTIONS, HEAD, GET, PUT, POST, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
};

exports.catchClientErrors = (req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
};

exports.catchAllErrors = (error, req, res) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
};

exports.addMockStudy = () => {
  const study = mockStudies[0];
  Study.create(study, (err, study) => {
    if (err) return console.error(err);
    console.log('study added', study);
  });
};
