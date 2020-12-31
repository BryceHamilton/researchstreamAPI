const router = require('express').Router();

router.get('/', (req, res) => {
  res.status.redirect('/study/study_list');
});

module.exports = router;
