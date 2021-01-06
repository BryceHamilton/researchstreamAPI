import { RequestHandler } from 'express';
import Participant from '../models/participant';
import { asyncHandler } from '../../utils';
import { IUser } from '../models/user';

export const create_participant: RequestHandler = asyncHandler(
  async (req, res) => {
    const { user } = req.body as { user: IUser };
    const existingParticipant: IUser | null = await Participant.findOne({
      googleId: user.googleId,
    });
    if (existingParticipant) {
      res
        .status(200)
        .json({ message: 'Participant logged in', user: existingParticipant });
    } else {
      const newParticipant: IUser = await new Participant(user).save();
      res.status(201).json({
        message: 'Participant succesfully added',
        user: newParticipant,
      });
    }
  }
);
