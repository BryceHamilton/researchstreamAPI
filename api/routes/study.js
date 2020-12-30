const router = require('express').Router();
const { study_list } = require('../controllers/study-controller');

router.get('/study_list', study_list);

module.exports = router;
