const router = require('express').Router();
const { create_participant } = require('../controllers/auth-controller');

router.post('/login', create_participant);

module.exports = router;
