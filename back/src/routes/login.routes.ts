import {Router} from "express"
import { loginCustomerController } from "../controllers/login.controllers"
import ensureDataIsValidMW from "../middlewares/ensureDataIsValidMW"

const loginRoutes = Router()

loginRoutes.post("/login", ensureDataIsValidMW(loginSchema), loginCustomerController)

export  default loginRoutes