import { Schema, model, Document } from 'mongoose';

export interface IStudy extends Document {
  _id: string;
  title: string;
  researcher: string;
  purpose: string;
  lab: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  compensation: string;
  whoIsConducting: string;
  benefits: string;
  inclusion: [string];
  exclusion: [string];
  expectations: string;
  timeSlots: [string];
  datePosted: Date;
}

const StudySchema = new Schema({
  title: String,
  researcher: { type: Schema.Types.ObjectId, ref: 'Researcher' },
  purpose: String,
  lab: String,
  location: { lat: Number, lng: Number, address: String } || String,
  compensation: String,
  whoIsConducting: String,
  benefits: String,
  inclusion: [String],
  exclusion: [String],
  expectations: String,
  timeSlots: [{ type: Schema.Types.ObjectId, ref: 'TimeSlot' }],
  datePosted: Date,
});

export default model<IStudy>('Study', StudySchema, 'Study');
