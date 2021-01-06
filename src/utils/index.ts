exports.generateID = () => `${Math.floor(Math.random() * 1000000000)}`;

exports.asyncHandler = (
  fn: (req: Express.Request, res: Express.Response, next: any) => void
) => (req: Express.Request, res: Express.Response, next: any) =>
  Promise.resolve(fn(req, res, next)).catch(next);
