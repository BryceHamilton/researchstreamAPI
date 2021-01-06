const { Schema } = require('mongoose');

module.exports = new Schema({
  googleId: String,
  imageUrl: String,
  email: String,
  name: String,
  givenName: String,
  familyName: String,
});
