import express from 'express';
const router = express.Router();

import { create_participant } from '../controllers/auth-controller';

router.post('/login', create_participant);

export default router;
