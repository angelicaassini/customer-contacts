import {Request, Response} from "express"
import { iCustomerRequest, iCustomerUpdateRequest } from "../interfaces/customers"
import { iCustomer } from "../types"

export const createCustomerController = async (req:Request, res: Response) => {
    const userData:iCustomerRequest = req.body
    const data = await createCustomerService(userData)
    return res.status(201).json(data)
}

export const listAllCustomersController = async (req:Request, res:Response) => {
    const data = await listAllCustomersService()
    return res.status(200).json(data)
}

export const updateCustomerController = async (req:Request, res: Response) => {
    const userData:iCustomerUpdateRequest = req.body
    const data = await updateCustomerService(userData)
    return res.status(200).json(data)
}

export const deleteCustomerController = async (req:Request, res:Response) => {
    const id:string = req.params.id
    const data = await deleteCustomerService(id)
    return res.status(204).json({})
}