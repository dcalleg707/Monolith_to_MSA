"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Bicycle_1 = require("./database/entities/Bicycle");
require("dotenv").config();
const mongodbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@clustershoppyfast.cavepww.mongodb.net/test`;
console.log(mongodbUri);
const myDataSource = new typeorm_1.DataSource({
    type: "mongodb",
    url: mongodbUri,
    useNewUrlParser: true,
    synchronize: true,
    useUnifiedTopology: true,
    logging: true,
    ssl: true,
    entities: [Bicycle_1.Bicycle],
    subscribers: [],
    migrations: [],
});
exports.default = myDataSource;
