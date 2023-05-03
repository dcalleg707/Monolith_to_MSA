import { Router, Response, Request } from "express";
import { BicycleRepository } from "../database/repositories/BicycleRepository";
export class BicycleController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public getAllBicycles = async (req: Request, res: Response, next: Function) => {
        BicycleRepository.find().then(bicycles => {
            res.send(bicycles);
        }).catch(error => {
            next(error);
        });
    }

    public routes() {
        this.router.get("/", this.getAllBicycles);
    }
}