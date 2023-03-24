import {Request, Response, NextFunction} from "express"
import AppError from "../errors/AppError"
import AppDataSource from "../data-source"
import Customer from "../entities/customer.entity"

const ensureEmailNotExistsMW = async (req: Request, res: Response, next: NextFunction) => {
    const customerRepository = AppDataSource.getRepository(Customer)
    const foundCustomer = await customerRepository.findOneBy({email: req.body.email}) 
    
    if(foundCustomer){
        throw new AppError("This email is already registered.", 409)
    }
    return next()
}
export default ensureEmailNotExistsMW