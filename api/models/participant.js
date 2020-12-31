const mongoose = require('mongoose');
const { Schema } = mongoose;

const ParticipantSchema = new Schema({ username: String, googleId: String });

module.exports = mongoose.model(
  'Participant',
  ParticipantSchema,
  'Participant'
);
