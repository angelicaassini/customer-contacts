import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

const ensureUpdateFieldsAreValidMW = async (req:Request, res:Response, next:NextFunction) => {
    const customerData = req.body
    if ("customer_name" in customerData || "CNPJ" in customerData){
        throw new AppError("You cannot update fields 'customer_name' or 'CNPJ'", 401)
    }
    return next()

}
export default ensureUpdateFieldsAreValidMW