import AppDataSource from "../../data-source";
import Customer from "../../entities/customer.entity";
import AppError from "../../errors/AppError";
import { iCustomerResponse} from "../../interfaces";

const getContactByCustomerService = async (params_id: string): Promise<iCustomerResponse|null> => {
  const customerRepository = AppDataSource.getRepository(Customer);
  const findCustomer = await customerRepository.findOne({
    where:{
      id: params_id
    },
    relations:{
      contacts: true
    }    
  });

  if(!findCustomer){
    throw new AppError('Customer not found')
  }

  return findCustomer
};
export default getContactByCustomerService;
