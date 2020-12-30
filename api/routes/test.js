const router = require('express').Router();
const { getBacon } = require('../controllers/bacon-controller');

router.get('/bacon', getBacon);

module.exports = router;
