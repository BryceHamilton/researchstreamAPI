const { Schema } = require('mongoose');

const TimeSlotSchema = new Schema({
  study: { type: Schema.Types.ObjectId, ref: 'Study' },
  start: Date,
  end: Date,
  applicants: [{ type: Schema.Types.ObjectId, ref: 'Participant' }],
  participant: { type: Schema.Types.ObjectId, ref: 'Participant' },
});

module.exports = mongoose.model('TimeSlot', TimeSlotSchema, 'TimeSlot');
