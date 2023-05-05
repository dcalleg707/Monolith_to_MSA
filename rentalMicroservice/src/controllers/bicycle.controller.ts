import { Router, Response, Request } from "express";
import { BicycleRepository } from "../database/repositories/BicycleRepository";
import { randomInt } from "crypto";
export class BicycleController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public rentBicycle = async (req: Request, res: Response, next: Function) => {
        BicycleRepository.findOneBy({ id: Number(req.body.id) }).then(bicycle => {
            if (!bicycle) throw new Error("Bicycle not found");
            delete req.body.id;
            BicycleRepository.merge(bicycle, req.body);
            return BicycleRepository.save(bicycle)
        }).then(results => {
            res.send(results);
        }).catch(error => {
            next(error);
        });
    }

    public routes() {
        this.router.post("/", this.rentBicycle);
    }
}