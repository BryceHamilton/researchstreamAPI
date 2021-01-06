"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var server = app_1.default.listen(app_1.default.get('port'), function () {
    // eslint-disable-next-line no-console
    console.info("\uD83C\uDF0D Listening on port " + app_1.default.get('port'));
});
exports.default = server;