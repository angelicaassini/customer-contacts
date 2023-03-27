import express from "express";
import "express-async-errors"
import handleError from "./errors/handleError"
import "reflect-metadata"

import loginRoutes from "./routes/login.routes"
import customersRoutes from "./routes/customers.routes";
import contactsRoutes from "./routes/contacts.routes";

const app = express()
app.use(express.json())


const TT = app.get("/customers", (req, res) => {
    console.log(TT)
    // const customers = database.map((customer) => {
    //     return {id:customer.id, name:customer.name}
    })

//     return res.status(200).json(customers)
// })

// app.get("/customers/:id", (req, res) => {
//     const customer = database.find(customer => customer.id === Number(req.params.id))
//     if(!customer) {
//         return res.status(404).json({message:"customer not found !"})
//     }
//     return res.status(200).json(customer)
// })


app.use("", customersRoutes)
app.use("", loginRoutes)
app.use("", contactsRoutes)

app.use(handleError)

export default app

