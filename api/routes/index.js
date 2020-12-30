const router = require('express').Router();

router.get('/', (req, res) => {
  res.status.redirect('/test/bacon');
});

module.exports = router;
