import {Request, Response} from "express"
import loginCustomerService from "../services/login/loginCustomer.service"


export const loginCustomerController = async (req:Request, res:Response) => {
    const token = await loginCustomerService(req.body)
    return res.status(200).json({token:token.token, customerId:token.customerId, findCustomer:token.customerFound})
}
