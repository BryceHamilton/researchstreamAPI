const passport = require('passport');
require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Participant = require('../api/models/participant');
const { create_participant } = require('../api/controllers/auth-controller');

passport.serializeUser((participant, done) => {
  done(null, participant.id);
});

passport.deserializeUser((id, done) => {
  Participant.findById(id).then((participant) => done(null, participant));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
    },
    create_participant
  )
);
