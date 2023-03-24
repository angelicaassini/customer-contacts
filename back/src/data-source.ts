import {DataSource} from "typeorm"
import "dotenv/config"
// require('dotenv').config() - apenas ES05
import "reflect-metadata"
import Customer from "./entities/customer.entity"
import Contact from "./entities/contact.entity"
import {initial1679697495978} from "./migrations/1679697495978-initial"

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
        migrations: [initial1679697495978]
    }
)
export default AppDataSource