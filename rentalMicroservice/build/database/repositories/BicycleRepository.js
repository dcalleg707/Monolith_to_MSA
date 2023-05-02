"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BicycleRepository = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const Bicycle_1 = require("../entities/Bicycle");
exports.BicycleRepository = data_source_1.default.getRepository(Bicycle_1.Bicycle);
