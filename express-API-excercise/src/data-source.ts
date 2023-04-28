import { DataSource } from 'typeorm';
import mongodb from "mongodb";
require("dotenv").config();
/*
export const AppDataSource: DataSource = new DataSource({
    type: "postgres",
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    username: process.env.PG_ACCOUNT,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    synchronize: Boolean(process.env.PG_SYNCHRONIZE),
    logging: Boolean(process.env.PG_LOGGING),
    entities: [process.env.PG_ENTITIES || ""],
});
*/
const myDataSource = new DataSource({
    type: "mongodb",
    host: "mongodb+srv://root:root123@clustershoppyfast.cavepww.mongodb.net/test",
    port: 27017,
    database: "test",
})
 

export default myDataSource;
