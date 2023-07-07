import {DataSource} from "typeorm"
import "dotenv/config"
// require('dotenv').config() - apenas ES05
import "reflect-metadata"
import Customer from "./entities/customer.entity"
import Contact from "./entities/contact.entity"
import { first1683502917549 } from "./migrations/1683502917549-first"

const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ?
    {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"]
    }
    :
    {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        entities: [Customer, Contact],
        migrations: [first1683502917549]
    }
)
export default AppDataSource