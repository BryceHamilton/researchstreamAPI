const mongoose = require('mongoose');

const { Schema } = mongoose;

const ParticipantSchema = new Schema({
  _id: Schema.Types.ObjectId,
});

module.exports = mongoose.model('Study', ParticipantSchema);
