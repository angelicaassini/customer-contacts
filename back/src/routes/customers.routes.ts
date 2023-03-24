import {Router} from "express"
import { createCustomerController, deleteCustomerController, listAllCustomersController, updateCustomerController } from "../controllers/customers.controllers"
import ensureAuthMW from "../middlewares/ensureAuthMW"
import ensureEmailNotExistsMW from "../middlewares/ensureEmailNotExistsMW"
import ensureUpdateFieldsAreValidMW from "../middlewares/ensureUpdateFieldsAreValidMW"

const customersRoutes = Router()

customersRoutes.post("/customers",  ensureEmailNotExistsMW, createCustomerController)
customersRoutes.get("/customers", ensureAuthMW, listAllCustomersController)
customersRoutes.patch("/customers", ensureAuthMW, ensureUpdateFieldsAreValidMW, updateCustomerController)
customersRoutes.delete("/customers", ensureAuthMW, deleteCustomerController)