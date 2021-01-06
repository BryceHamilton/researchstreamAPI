"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.default = new mongoose_1.Schema({
    googleId: String,
    imageUrl: String,
    email: String,
    name: String,
    givenName: String,
    familyName: String,
});
