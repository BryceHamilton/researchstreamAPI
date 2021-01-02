const Session = require('../models/session');
const Participant = require('../models/participant');
const Researcher = require('../models/researcher');
const { generateID, asyncHandler } = require('../../utils');
const clientAddress = process.env.CLIENT_ADDRESS;

exports.create_participant = (accessToken, refreshToken, profile, done) => {
  Participant.findOne({ googleId: profile.id }).then((currentParticipant) => {
    if (currentParticipant) {
      console.log('participant logged in', currentParticipant);
      done(null, currentParticipant);
    } else {
      new Participant({
        username: profile.displayName,
        googleId: profile.id,
      })
        .save()
        .then((newParticipant) => {
          console.log('participant added', newParticipant);
          done(null, newParticipant);
        });
    }
  });
};

exports.create_session = (req, res, next) => {
  const sessionId = generateID();
  console.log('creating session');
  Participant.findOne({ googleId: req.user.googleId })
    .then((participant) => {
      console.log('participant', participant);
      if (participant) {
        const session = {
          sessionId: sessionId,
          userId: participant._id,
        };
        Session.create(session, (err, session) => {
          if (err) return next(err);
        });
        res.cookie('sid', sessionId);
      }
      res.redirect(clientAddress);
    })
    .catch(next);
};

exports.get_user = asyncHandler(async (req, res, next) => {
  console.log(req);
  const { userId } = req;

  const participant = await Participant.findById(userId);
  if (participant) {
    console.log(participant);
    return res.json({
      isAuthenticated: true,
      username: participant.username,
    });
  }

  const researcher = await Researcher.findById(userId);
  if (researcher)
    return res.json({
      isAuthenticated: true,
      username: researcher.username,
    });
});
