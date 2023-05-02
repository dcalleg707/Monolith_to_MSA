import { Router, Response, Request } from "express";
import { BicycleRepository } from "../database/repositories/BicycleRepository";
import { randomInt } from "crypto";
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

    public getBicycleById = async (req: Request, res: Response, next: Function) => {
        BicycleRepository.findOneBy({ id: Number(req.params.id) }).then(bicycle => {
            if (!bicycle) throw new Error("Bicycle not found");
            res.send(bicycle);
        }).catch(error => {
            next(error);
        });
    }

    public createBicycle = async (req: Request, res: Response, next: Function) => {
        let data = req.body
        data.id = randomInt(1, 10000)
        const newBicycle = BicycleRepository.create(req.body)
        BicycleRepository.save(newBicycle).then(results => {
            res.status(201).send(results);
        }).catch(error => {
            next(error);
        });
    }

    public updateBicycle = async (req: Request, res: Response, next: Function) => {
        BicycleRepository.findOneBy({ id: Number(req.params.id) }).then(bicycle => {
            if (!bicycle) throw new Error("Bicycle not found");
            BicycleRepository.merge(bicycle, req.body);
            return BicycleRepository.save(bicycle)
        }).then(results => {
            res.send(results);
        }).catch(error => {
            next(error);
        });
    }

    public deleteBicycle = async (req: Request, res: Response, next: Function) => {
        if(req.params.id) {
            BicycleRepository.delete({ id: Number(req.params.id) }).then(results => {
                if (results.affected === 0) throw new Error("Bycicle not found");
                res.send(results);
            }).catch(error => {
                next(error);
            });
        }
        else {
            res.status(404).send("")
        }
    }

    public routes() {
        this.router.get("/", this.getAllBicycles);
        this.router.get("/:id", this.getBicycleById);
        this.router.post("/", this.createBicycle);
        this.router.put("/:id", this.updateBicycle);
        this.router.delete("/:id", this.deleteBicycle);
    }
}