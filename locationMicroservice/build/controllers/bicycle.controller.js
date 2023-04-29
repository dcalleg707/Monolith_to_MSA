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
        this.getAllBicycles = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            BicycleRepository_1.BicycleRepository.find().then(bicycles => {
                res.send(bicycles);
            }).catch(error => {
                next(error);
            });
        });
        this.getBicycleById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            BicycleRepository_1.BicycleRepository.findOneBy({ id: Number(req.params.id) }).then(bicycle => {
                if (!bicycle)
                    throw new Error("Bicycle not found");
                res.send(bicycle);
            }).catch(error => {
                next(error);
            });
        });
        this.createBicycle = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const newBicycle = BicycleRepository_1.BicycleRepository.create(req.body);
            BicycleRepository_1.BicycleRepository.save(newBicycle).then(results => {
                res.status(201).send(results);
            }).catch(error => {
                next(error);
            });
        });
        this.updateBicycle = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            BicycleRepository_1.BicycleRepository.findOneBy({ id: Number(req.params.id) }).then(bicycle => {
                if (!bicycle)
                    throw new Error("Bicycle not found");
                BicycleRepository_1.BicycleRepository.merge(bicycle, req.body);
                return BicycleRepository_1.BicycleRepository.save(bicycle);
            }).then(results => {
                res.send(results);
            }).catch(error => {
                next(error);
            });
        });
        this.deleteBicycle = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            BicycleRepository_1.BicycleRepository.delete(req.params.id).then(results => {
                if (results.affected === 0)
                    throw new Error("Bycicle not found");
                res.send(results);
            }).catch(error => {
                next(error);
            });
        });
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/", this.getAllBicycles);
        this.router.get("/:id", this.getBicycleById);
        this.router.post("/", this.createBicycle);
        this.router.put("/:id", this.updateBicycle);
        this.router.delete("/:id", this.deleteBicycle);
    }
}
exports.BicycleController = BicycleController;
