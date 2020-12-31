const passport = require('passport');
require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Participant = require('../api/models/participant');

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
    // use async/await ?
    async (accessToken, refreshToken, profile, done) => {
      // passport callback function
      const currentParticipant = await Participant.findOne({
        googleId: profile.id,
      });

      if (currentParticipant) {
        console.log('newUser logged in', newUser);
        done(null, currentParticipant);
      } else {
        const newParticipant = await new Participant({
          username: profile.displayName,
          googleId: profile.id,
        }).save();

        console.log('newParticipant added', newParticipant);
        done(null, newParticipant);
      }
    }
  )
);
