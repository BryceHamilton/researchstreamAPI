const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudySchema = new Schema({
  title: String,
  researcher: { type: Schema.Types.ObjectId, ref: 'Researcher' },
  location: String,
  purpose: String,
  lab: String,
  location: { lat: Number, lng: Number, address: String },
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
