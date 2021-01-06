import { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  googleId: string;
  imageUrl: string;
  email: string;
  name: string;
  givenName: string;
  familyName: string;
}

export default new Schema({
  googleId: String,
  imageUrl: String,
  email: String,
  name: String,
  givenName: String,
  familyName: String,
});
