import { ErrorRequestHandler, RequestHandler } from 'express';
const clientAddress = process.env.CLIENT_ADDRESS;

export const redirectToClient: RequestHandler = (_, res, next): void => {
  clientAddress ? res.status(301).redirect(clientAddress) : next();
};

export const catchAllErrors: ErrorRequestHandler = (error, _, res): void => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
};
