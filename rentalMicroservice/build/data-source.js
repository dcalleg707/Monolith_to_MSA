"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
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
    entities: [__dirname + '/../**/*.entity.js'],
    subscribers: [],
    migrations: [],
});
exports.default = myDataSource;
