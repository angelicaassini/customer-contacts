import { Router } from "express";
import { createContactController, listAllContactsController } from "../controllers/contacts.controllers";
import ensureAuthMW from "../middlewares/ensureAuthMW";
import ensureDataIsValidMW from "../middlewares/ensureDataIsValidMW";
import ensureEmailNotExistsMW from "../middlewares/ensureEmailNotExistsMW";
import { contactRequestSchema } from "../schemas/contact.schema";


const contactsRoutes = Router()

contactsRoutes.post("/contacts", ensureAuthMW, ensureDataIsValidMW(contactRequestSchema), ensureEmailNotExistsMW, createContactController)
contactsRoutes.get("/contacts", ensureAuthMW, listAllContactsController)

export default contactsRoutes