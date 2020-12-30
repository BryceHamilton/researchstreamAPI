const mongoose = require('mongoose');

const { Schema } = mongoose;

const StudySchema = new Schema(
  {
    title: String,
    purpose: String,
    lab: String,
    location: String,
    compensation: String,
    whoIsConducting: String,
    benefits: String,
    inclusion: [String],
    exclusion: [String],
    expectations: String,
    researcher: { type: Schema.Types.ObjectId, ref: 'Researcher' },
    timeSlots: [Date],
    datePosted: Date,
  },
  { collection: 'Study' }
);

module.exports = mongoose.model('Study', StudySchema);
