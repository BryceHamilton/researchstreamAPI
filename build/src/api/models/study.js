"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var StudySchema = new mongoose_1.Schema({
    title: String,
    researcher: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Researcher' },
    purpose: String,
    lab: String,
    location: { lat: Number, lng: Number, address: String } || String,
    compensation: String,
    whoIsConducting: String,
    benefits: String,
    inclusion: [String],
    exclusion: [String],
    expectations: String,
    timeSlots: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'TimeSlot' }],
    datePosted: Date,
});
exports.default = mongoose_1.model('Study', StudySchema, 'Study');
