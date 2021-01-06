import { model } from 'mongoose';
import UserSchema, { IUser } from './user';

export default model<IUser>('Researcher', UserSchema, 'Researcher');
