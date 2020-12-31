const passport = require('passport');
require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
  new GoogleStrategy(
    {
      clientID: proccess.env.GOOGLE_CLIENT_ID,
      clientSecret: proccess.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
    },
    (accessToken) => {
      console.log('access token: ', accessToken);
    }
  )
);