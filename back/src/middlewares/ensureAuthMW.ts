import {Request, Response, NextFunction} from "express"
import AppError from "../errors/AppError"
import "dotenv/config"
import jwt from "jsonwebtoken"

const ensureAuthMW = async (req: Request, res: Response, next:NextFunction) => {
    let token = req.headers.authorization

    if(!token){
        throw new AppError("Token not found.", 401)
    }

    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) =>  {
        if(error){
            throw new AppError(error.message, 401)
        }
        req.customer = {
            id:decoded.sub,

        }

        return next()
    })


}
export default ensureAuthMW