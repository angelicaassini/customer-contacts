import {Router} from "express"
import { createCustomerController, deleteCustomerController, getCustomerController, listAllCustomersController, updateCustomerController } from "../controllers/customers.controllers"
import ensureAuthMW from "../middlewares/ensureAuthMW"
import ensureDataIsValidMW from "../middlewares/ensureDataIsValidMW"
import ensureEmailNotExistsMW from "../middlewares/ensureEmailNotExistsMW"
import ensureUpdateFieldsAreValidMW from "../middlewares/ensureUpdateFieldsAreValidMW"
import { customerRequestSchema, customerUpdateRequestSchema } from "../schemas/customer.schema"

const customersRoutes = Router()

customersRoutes.post("/customers",  ensureDataIsValidMW(customerRequestSchema), ensureEmailNotExistsMW, createCustomerController)
customersRoutes.get("/customers", ensureAuthMW, listAllCustomersController)
customersRoutes.get("/customers/:id", ensureAuthMW, getCustomerController)
customersRoutes.patch("/customers/:id", ensureAuthMW, ensureUpdateFieldsAreValidMW, ensureDataIsValidMW(customerUpdateRequestSchema), updateCustomerController)
customersRoutes.delete("/customers/:id", ensureAuthMW, deleteCustomerController)

export default customersRoutes