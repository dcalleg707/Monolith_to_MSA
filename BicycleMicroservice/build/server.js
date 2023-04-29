"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const bicycle_controller_1 = require("./controllers/bicycle.controller");
const body_parser_1 = __importDefault(require("body-parser"));
const data_source_1 = __importDefault(require("./data-source"));
require("dotenv").config();
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.configuration();
        this.bicycleController = new bicycle_controller_1.BicycleController();
        this.routes();
        data_source_1.default.initialize().then(() => {
            console.log("Connected to database");
        }).catch((error) => {
            console.log("Error during dataSource initialization", error);
        });
    }
    configuration() {
        this.app.set('port', process.env.PORT || 3001);
        this.app.use(body_parser_1.default.json());
    }
    routes() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.use('/api/bicycles', this.bicycleController.router);
        });
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
