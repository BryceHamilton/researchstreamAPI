const Study = require('../models/study');

/* [CREATE] */

exports.create_study_post = (req, res, next) => {
  const { study } = req.body;
  Study.create(study, (err, study) => {
    if (err) return next(err);
    console.log('study added', study.title);
  });
};

/* [READ] */

exports.get_study_list = (req, res) => {
  Study.find({}).exec((err, studies_list) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(studies_list);
  });
};

exports.get_study_by_id = (req, res) => {
  const { id } = req.params;
  Study.find({ _id }).exec((err, studies_list) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(studies_list);
  });
};

/* [UPDATE] */

exports.update_study_put = function (req, res) {
  res.send('NOT IMPLEMENTED: Author update PUT');
};

exports.update_study_patch = function (req, res) {
  res.send('NOT IMPLEMENTED: Author update PATCH');
};

/* [DELETE] */

exports.delete_study = function (req, res) {
  res.send('NOT IMPLEMENTED: Author delete POST');
};
