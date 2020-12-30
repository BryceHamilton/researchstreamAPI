const Study = require('../models/study');

// Display list of all Studies.
exports.study_list = (req, res) => {
  Study.find({}, 'title').exec((err, studies_list) => {
    if (err) {
      return next(err);
    }
    res.status(200).send(studies_list);
  });
};

// Add Study
exports.add_study = (req, res, next) => {
  const { study } = req;
  Study.create(study, (err, study) => {
    if (err) return next(err);
    console.log('study added', study);
  });
};
