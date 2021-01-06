"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var TimeSlotSchema = new mongoose_1.Schema({
    study: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Study' },
    start: Date,
    end: Date,
    applicants: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Participant' }],
    participant: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Participant' },
});
exports.default = mongoose_1.model('TimeSlot', TimeSlotSchema, 'TimeSlot');
