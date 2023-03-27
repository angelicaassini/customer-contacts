import {Request, Response} from "express"
import { iContactRequest } from "../interfaces"
import createContactService from "../services/contact/createContactService"
import listAllContactsService from "../services/contact/listAllContactsService"

export const createContactController = async (req:Request, res:Response) => {
    const contactData:iContactRequest = req.body
    const data = await createContactService(contactData, req.customer.id)
    return res.status(201).json(data)
}

export const listAllContactsController = async (req:Request, res:Response) => {
    const data = await listAllContactsService()
    return res.status(200).json(data)
}