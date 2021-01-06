import { RequestHandler } from 'express';
import { CallbackError } from 'mongoose';
import Study, { IStudy } from '../models/study';

/* [CREATE] */

export const create_study_post: RequestHandler = (req, res, next) => {
  const { study } = req.body as { study: IStudy };
  Study.create(study, (err: CallbackError, study: IStudy) => {
    if (err) return next(err);
    console.log('study sucessfully added', study.title);
    res.status(201).send({ message: 'study sucessfully added', study });
  });
};

/* [READ] */

export const get_study_list: RequestHandler = (_, res, next) => {
  Study.find({}).exec((err: CallbackError, studies_list: IStudy[]) => {
    if (err) return next(err);
    res.status(200).json(studies_list);
  });
};

export const get_study_by_id: RequestHandler = (req, res, next) => {
  const { _id } = req.params;
  Study.findOne({ _id }).exec((err: CallbackError, study: IStudy | null) => {
    if (err) return next(err);
    res.status(200).json(study);
  });
};

/* [UPDATE] */

export const update_study_put: RequestHandler = (_, res) => {
  res.status(500).send('NOT IMPLEMENTED: Author update PUT');
};

export const update_study_patch: RequestHandler = (_, res) => {
  res.status(500).send('NOT IMPLEMENTED: Author update PATCH');
};

/* [DELETE] */

export const delete_study: RequestHandler = (_, res) => {
  res.status(500).send('NOT IMPLEMENTED: Author delete POST');
};
