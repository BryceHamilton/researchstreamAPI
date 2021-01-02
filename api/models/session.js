const { Schema, model } = require('mongoose');

const SessionSchema = new Schema({
  sessionId: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = model('Session', SessionSchema, 'Session');
