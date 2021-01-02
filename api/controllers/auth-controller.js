const Participant = require('../models/participant');
const { asyncHandler } = require('../../utils');

exports.create_participant = asyncHandler(async (req, res) => {
  const { user } = req.body;
  console.log(user);
  const existingParticipant = await Participant.findOne({
    googleId: user.googleId,
  });
  if (existingParticipant) {
    res
      .status(200)
      .json({ message: 'Participant logged in', user: existingParticipant });
  } else {
    const newParticipant = await new Participant(user).save();
    res
      .status(201)
      .json({ message: 'Participant succesfully added', user: newParticipant });
  }
});
