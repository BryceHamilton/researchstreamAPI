import express, { Response, NextFunction } from 'express';
const router = express.Router();

const clientAddress = process.env.CLIENT_ADDRESS;

router.get('/', (_, res: Response, next: NextFunction) => {
  clientAddress ? res.status(301).redirect(clientAddress) : next();
});

export default router;
