const { Schema } = require('mongoose');

const ResearcherSchema = new Schema();

module.exports = mongoose.model('Researcher', ResearcherSchema, 'Researcher');
