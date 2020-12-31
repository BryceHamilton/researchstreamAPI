const mongoose = require('mongoose');
const { Schema } = mongoose;

const ParticipantSchema = new Schema();

module.exports = mongoose.model(
  'Participant',
  ParticipantSchema,
  'Participant'
);
