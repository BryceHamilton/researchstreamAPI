"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAllErrors = void 0;
var catchAllErrors = function (error, _, res) {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
};
exports.catchAllErrors = catchAllErrors;
