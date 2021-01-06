"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var study_controller_1 = require("../controllers/study-controller");
router.post('/:id', study_controller_1.create_study_post);
router.get('/study_list', study_controller_1.get_study_list);
router.get('/:id', study_controller_1.get_study_by_id);
router.put('/:id', study_controller_1.update_study_put);
router.patch('/:id', study_controller_1.update_study_patch);
router.delete('/:id', study_controller_1.delete_study);
exports.default = router;
