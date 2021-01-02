const Session = require('../models/session');
const clientAddress = process.env.CLIENT_ADDRESS;

exports.authCheck = (req, res, next) =>
  !req.user ? res.redirect(clientAddress) : next();

exports.sessionCheck = (req, res, next) => {
  console.log('checking session', req.cookies);
  Session.findOne({ sessionId: req.cookies.sid }).then((session, err) => {
    if (err) return console.log(err);
    if (!session) return res.json({ isAuthenticated: false });
    req.userId = session.userId;
    next();
  });
};
