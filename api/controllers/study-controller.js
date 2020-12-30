const Study = require('../models/study');

// Display list of all Studies.
exports.study_list = (req, res) => {
  res.send('NOT IMPLEMENTED: Author list');
};

// Add Study
exports.add_study = (req, res, next) => {
  const { study } = req;
  Study.create(study, (err, study) => {
    if (err) return next(err);
    console.log('study added', study);
  });
};
