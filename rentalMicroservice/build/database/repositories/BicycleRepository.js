"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BicycleRepository = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const Bicycle_entity_1 = require("../entities/Bicycle.entity");
exports.BicycleRepository = data_source_1.default.getRepository(Bicycle_entity_1.Bicycle);
