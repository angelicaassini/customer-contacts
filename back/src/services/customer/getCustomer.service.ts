import AppDataSource from "../../data-source";
import Customer from "../../entities/customer.entity";
import { iCustomerResponse} from "../../interfaces";

const getCustomerService = async (
   params_id: string
): Promise<iCustomerResponse|null> => {
  const customerRepository = AppDataSource.getRepository(Customer);
  const findCustomer = await customerRepository.findOneBy({
    id: params_id,
  });

  return findCustomer
};
export default getCustomerService;
