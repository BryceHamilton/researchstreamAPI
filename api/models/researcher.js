const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResearcherSchema = new Schema();

module.exports = mongoose.model('Researcher', ResearcherSchema, 'Researcher');
