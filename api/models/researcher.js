const { model } = require('mongoose');
const UserSchema = require('./user');

module.exports = model('Researcher', UserSchema, 'Researcher');
