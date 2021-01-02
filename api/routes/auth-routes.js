const router = require('express').Router();
const passport = require('passport');
const { create_session, get_user } = require('../controllers/auth-controller');
const { authCheck, sessionCheck } = require('../middleware/auth');

router.get('/user', sessionCheck, get_user);

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get(
  '/google/redirect',
  authCheck,
  passport.authenticate('google'),
  create_session
);

router.get('/logout', (req, res) => {});

module.exports = router;
