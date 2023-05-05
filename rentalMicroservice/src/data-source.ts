import { DataSource } from 'typeorm';
import mongodb from "mongodb";
import { Bicycle } from './database/entities/Bicycle.entity';

require("dotenv").config();

const mongodbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@clustershoppyfast.cavepww.mongodb.net/test`
console.log(mongodbUri)
const myDataSource = new DataSource({
    type: "mongodb",
    url: mongodbUri,
    useNewUrlParser: true,
    synchronize: true,
    useUnifiedTopology: true,
    logging: true,
    ssl: true,
    entities: [__dirname + '/../**/*.entity.js']
    ,
    subscribers: [],
    migrations: [],
})
export default myDataSource;
