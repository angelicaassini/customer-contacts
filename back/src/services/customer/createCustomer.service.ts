import AppDataSource from "../../data-source"
import Customer from "../../entities/customer.entity"
import {iCustomerRequest, iCustomerResponse } from "../../interfaces/customers"

const createCustomerService = async(customerData:iCustomerRequest): Promise<iCustomerResponse> => {
    const customerRepository = AppDataSource.getRepository(Customer)
    const validatedCustomerData = await customerRequestSchema.validate(customerData)

    const createdCustomer = customerRepository.create(validatedCustomerData)
    await customerRepository.save(createdCustomer)

    const {password, ...customerWithoutPassword} =  createdCustomer
    return customerWithoutPassword

}
export default createCustomerService