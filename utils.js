exports.generateID = () => `${Math.floor(Math.random() * 1000000000)}`;

exports.asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
