import express from "express";
import "express-async-errors"
import handleError from "./errors/handleError"
import "reflect-metadata"

import loginRoutes from "./routes/login.routes"
import customersRoutes from "./routes/customers.routes";
import contactsRoutes from "./routes/contacts.routes";
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

app.use("", loginRoutes)
app.use("", customersRoutes)
app.use("", contactsRoutes)

app.use(handleError)

export default app

