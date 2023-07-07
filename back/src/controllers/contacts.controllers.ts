import {Request, Response} from "express"
import { iContactRequest } from "../interfaces"
import createContactService from "../services/contact/createContact.Service"
import deleteContactService from "../services/contact/deleteContact.Service"
import listAllContactsService from "../services/contact/listAllContacts.Service"
import updateContactService from "../services/contact/updateContact.Service"

export const createContactController = async (req:Request, res:Response) => {
    const contactData:iContactRequest = req.body
    const data = await createContactService(contactData, req.customer.id)
    return res.status(201).json(data)
}

export const listAllContactsController = async (req:Request, res:Response) => {
    const data = await listAllContactsService()
    return res.status(200).json(data)
}

export const updateContactController = async (req:Request, res:Response) => {
    const contactData:iContactRequest = req.body
    const params_id: string = req.params.id;
    const data = await updateContactService(contactData, params_id)
    return res.status(200).json(data)
}

export const deleteContactController = async (req:Request, res:Response) => {
    const params_id: string = req.params.id;
    const contact = await deleteContactService(params_id)
    return res.status(204).json(contact)
}



