"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
require('dotenv').config();
var app_handlers_1 = require("./api/handlers/app-handlers");
var routes_1 = __importDefault(require("./api/routes"));
var auth_routes_1 = __importDefault(require("./api/routes/auth-routes"));
var study_routes_1 = __importDefault(require("./api/routes/study-routes"));
mongoose_1.default.connect(process.env.DB_URL || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
var db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('db connected');
    // withGeolocation.forEach(addMockStudy);
});
var app = express_1.default();
app.set('port', process.env.PORT || 4000);
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/auth', auth_routes_1.default);
app.use('/', routes_1.default);
app.use('/study', study_routes_1.default);
app.use(app_handlers_1.catchAllErrors);
exports.default = app;
