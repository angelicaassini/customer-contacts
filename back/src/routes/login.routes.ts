import {Router} from "express"
import { loginCustomerController } from "../controllers/login.controllers"
import ensureDataIsValidMW from "../middlewares/ensureDataIsValidMW"
import loginSchema from "../schemas/login.schema"

const loginRoutes = Router()

loginRoutes.post("/", ensureDataIsValidMW(loginSchema), loginCustomerController)

export  default loginRoutes