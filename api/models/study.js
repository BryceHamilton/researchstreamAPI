const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudySchema = new Schema({
  title: String,
  researcher: { type: Schema.Types.ObjectId, ref: 'Researcher' },
  purpose: String,
  lab: String,
  location: String,
  compensation: String,
  whoIsConducting: String,
  benefits: String,
  inclusion: [String],
  exclusion: [String],
  expectations: String,
  timeSlots: [{ type: Schema.Types.ObjectId, ref: 'TimeSlot' }],
  datePosted: Date,
});

module.exports = mongoose.model('Study', StudySchema, 'Study');
