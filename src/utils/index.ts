import { RequestHandler } from 'express';

export const asyncHandler = (fn: RequestHandler): RequestHandler => (
  req,
  res,
  next
): Promise<void> => Promise.resolve(fn(req, res, next)).catch(next);
