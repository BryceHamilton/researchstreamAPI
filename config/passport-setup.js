const passport = require('passport');
require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Participant = require('../api/models/participant');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
    },
    // use async/await ?
    (accessToken, refreshToken, profile, done) => {
      // passport callback function
      //check if user already exists in our db with the given profile ID
      Participant.findOne({ googleId: profile.id }).then(
        (currentParticipant) => {
          if (currentParticipant) {
            //if we already have a record with the given profile ID
            console.log('newUser logged in', newUser);
            done(null, currentParticipant);
          } else {
            //if not, create a new user
            new Participant({
              username: profile.displayName,
              googleId: profile.id,
            })
              .save()
              .then((newParticipant) => {
                console.log('newParticipant added', newParticipant);
                done(null, newParticipant);
              });
          }
        }
      );
    }
  )
);
