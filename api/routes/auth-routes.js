const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
  // client route
});

// auth logout
router.get('/logout', (req, res) => {});

// auth with google
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('reached google callback');
});

module.exports = router;
