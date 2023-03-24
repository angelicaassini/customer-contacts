import express from "express";
// import database from "./database";
// import "express-async-errors"
// import handleError from "./errors/handleError"
// import "reflect-metadata"
// import userRoutes from "./routes/user.routes"
// import loginRoutes from "./routes/login.routes"

const app = express()
app.use(express.json())


app.get("/customers", (req, res) => {
    console.log("funcionou")
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

// app.listen(3001, () => {
//     console.log("server is running")
// })

// app.use("", userRoutes)
// app.use("", loginRoutes)

// app.use(handleError)

export default app

