import { model } from 'mongoose';
import UserSchema from './user';

export default model('Researcher', UserSchema, 'Researcher');
