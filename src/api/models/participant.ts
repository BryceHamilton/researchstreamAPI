import { model } from 'mongoose';
import UserSchema, { IUser } from './user';

export default model<IUser>('Participant', UserSchema, 'Participant');
