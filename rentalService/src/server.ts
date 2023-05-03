import "reflect-metadata";
import express from 'express';
import { BicycleController } from './controllers/bicycle.controller';
import bodyParser from "body-parser";
import AppDataSource from './data-source';
require("dotenv").config();

class Server {
    private bicycleController: BicycleController;
    public app: express.Application;

    constructor() {
        this.app = express();
        this.configuration();
        this.bicycleController = new BicycleController();
        this.routes();
        AppDataSource.initialize().then(() => {
            console.log("Connected to database");
        }).catch((error) => {
            console.log("Error during dataSource initialization", error);
        });
    }

    public configuration() {
        this.app.set('port', process.env.PORT || 3001);
        this.app.use(bodyParser.json());
    }

    public async routes() {
        this.app.use('/api/locations', this.bicycleController.router);
    }

    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();