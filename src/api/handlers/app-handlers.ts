import { ErrorRequestHandler } from 'express';

export const catchAllErrors: ErrorRequestHandler = (error, _, res) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
};
