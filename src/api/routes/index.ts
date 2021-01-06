import express from 'express';
import { redirectToClient } from '../handlers/app-handlers';
const router = express.Router();

router.get('/', redirectToClient);

export default router;
