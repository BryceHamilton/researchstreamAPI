"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var clientAddress = process.env.CLIENT_ADDRESS;
router.get('/', function (_, res, next) {
    clientAddress ? res.status(301).redirect(clientAddress) : next();
});
exports.default = router;
