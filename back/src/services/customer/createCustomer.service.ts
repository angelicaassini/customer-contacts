import AppDataSource from "../../data-source";
import Customer from "../../entities/customer.entity";
import { iCustomerRequest, iCustomerResponse } from "../../interfaces";
import { customerResponseSchema}  from "../../schemas/customer.schema";

const createCustomerService = async (
  customerData: iCustomerRequest
): Promise<iCustomerResponse> => {
  const customerRepository = AppDataSource.getRepository(Customer);

  const createdCustomer = customerRepository.create(customerData);
  await customerRepository.save(createdCustomer);

  const customer = await customerRepository.findOneBy({
    id: createdCustomer.id
  })


  const customerWithoutPassword = await customerResponseSchema.validate(customer, {
    stripUnknown: true,
    abortEarly: false
  })
  return customerWithoutPassword
};
export default createCustomerService;
