"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_study = exports.update_study_patch = exports.update_study_put = exports.get_study_by_id = exports.get_study_list = exports.create_study_post = void 0;
var study_1 = __importDefault(require("../models/study"));
/* [CREATE] */
var create_study_post = function (req, res, next) {
    var study = req.body.study;
    study_1.default.create(study, function (err, study) {
        if (err)
            return next(err);
        console.log('study sucessfully added', study.title);
        res.status(201).send({ message: 'study sucessfully added', study: study });
    });
};
exports.create_study_post = create_study_post;
/* [READ] */
var get_study_list = function (_, res, next) {
    study_1.default.find({}).exec(function (err, studies_list) {
        if (err)
            return next(err);
        res.status(200).json(studies_list);
    });
};
exports.get_study_list = get_study_list;
var get_study_by_id = function (req, res, next) {
    var _id = req.params._id;
    study_1.default.findOne({ _id: _id }).exec(function (err, study) {
        if (err)
            return next(err);
        res.status(200).json(study);
    });
};
exports.get_study_by_id = get_study_by_id;
/* [UPDATE] */
var update_study_put = function (_, res) {
    res.status(500).send('NOT IMPLEMENTED: Author update PUT');
};
exports.update_study_put = update_study_put;
var update_study_patch = function (_, res) {
    res.status(500).send('NOT IMPLEMENTED: Author update PATCH');
};
exports.update_study_patch = update_study_patch;
/* [DELETE] */
var delete_study = function (_, res) {
    res.status(500).send('NOT IMPLEMENTED: Author delete POST');
};
exports.delete_study = delete_study;
