const router = require('express').Router();

router.get('/', (req, res) => {
  res.redirect('/study/study_list');
});

module.exports = router;
