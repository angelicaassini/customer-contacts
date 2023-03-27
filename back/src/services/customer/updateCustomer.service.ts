import AppDataSource from "../../data-source";
import Customer from "../../entities/customer.entity";
import { iCustomerResponse, iCustomerUpdateRequest } from "../../interfaces";

const updateCustomerService = async (
  customerData: iCustomerUpdateRequest,
  params_id: string
): Promise<iCustomerResponse> => {
  const customerRepository = AppDataSource.getRepository(Customer);
  const findCustomer = await customerRepository.findOneBy({
    id: params_id,
  });

  const updatedCustomer = customerRepository.create({
    ...findCustomer,
    ...customerData,
  });
  await customerRepository.save(updatedCustomer);

  const { password, ...customerUpdatedWithoutPassword } = updatedCustomer;
  return customerUpdatedWithoutPassword;
};
export default updateCustomerService;
