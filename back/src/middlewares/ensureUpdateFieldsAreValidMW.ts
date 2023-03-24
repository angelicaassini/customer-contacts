import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

const ensureUpdateFieldsAreValidMW = async (req:Request, res:Response, next:NextFunction) => {
    const userData = req.body
    if ("customer_name" in userData || "CNPJ" in userData){
        throw new AppError("You cannot update fields 'customer_name' or 'CNPJ'", 401)
    }
    return next()

}
export default ensureUpdateFieldsAreValidMW