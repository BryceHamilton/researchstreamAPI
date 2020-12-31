const mockStudies = require('../../mock-studies');
const Study = require('../models/study');

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
  const study = mockStudies[1];
  Study.create(study, (err, study) => {
    if (err) return console.error(err);
    const { _id, title } = study;
    console.log('study added', { _id, title });
  });
};
