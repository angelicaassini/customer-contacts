import AppDataSource from "../../data-source";
import Customer from "../../entities/customer.entity";
import AppError from "../../errors/AppError";

const deleteCustomerService = async (params_id:string) => {
    const customerRepository = AppDataSource.getRepository(Customer)
    const findCustomer = await customerRepository.findOneBy({
        id: params_id
    })

    if(!findCustomer){
        throw new AppError("This customer does't exist.", 404)
    }

    if(!findCustomer.isActive){
        throw new AppError("This customer isn't active", 400)
    }

}
export default deleteCustomerService