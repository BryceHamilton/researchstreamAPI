const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResearcherSchema = new Schema({ username: String, googleId: String });

module.exports = mongoose.model('Researcher', ResearcherSchema, 'Researcher');
