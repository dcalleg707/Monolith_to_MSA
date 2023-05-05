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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BicycleController = void 0;
const express_1 = require("express");
const BicycleRepository_1 = require("../database/repositories/BicycleRepository");
class BicycleController {
    constructor() {
        this.rentBicycle = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            BicycleRepository_1.BicycleRepository.findOneBy({ id: Number(req.body.id) }).then(bicycle => {
                if (!bicycle)
                    throw new Error("Bicycle not found");
                delete req.body.id;
                BicycleRepository_1.BicycleRepository.merge(bicycle, req.body);
                return BicycleRepository_1.BicycleRepository.save(bicycle);
            }).then(results => {
                res.send(results);
            }).catch(error => {
                next(error);
            });
        });
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post("/", this.rentBicycle);
    }
}
exports.BicycleController = BicycleController;
