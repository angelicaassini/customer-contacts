import { Router } from "express";
import { createContactController, deleteContactController, listAllContactsController, updateContactController } from "../controllers/contacts.controllers";
import ensureAuthMW from "../middlewares/ensureAuthMW";
import ensureDataIsValidMW from "../middlewares/ensureDataIsValidMW";
import ensureEmailNotExistsMW from "../middlewares/ensureEmailNotExistsMW";
import { contactRequestSchema, contactUpdateRequestSchema } from "../schemas/contact.schema";


const contactsRoutes = Router()

contactsRoutes.post("/contacts", ensureAuthMW, ensureDataIsValidMW(contactRequestSchema), ensureEmailNotExistsMW, createContactController)
contactsRoutes.get("/contacts", ensureAuthMW, listAllContactsController)
contactsRoutes.patch("/contacts/:id", ensureAuthMW, ensureDataIsValidMW(contactUpdateRequestSchema), updateContactController)
contactsRoutes.delete("/contacts/:id", ensureAuthMW, deleteContactController)

export default contactsRoutes