import AppDataSource from "../../data-source"
import Customer from "../../entities/customer.entity"
import { iCustomerResponse } from "../../interfaces/customers"

const listAllCustomersService = async (): Promise<iCustomerResponse[]> => {
    const customerRepository = AppDataSource.getRepository(Customer)
    const customers = await customerRepository.find()
    await customerRepository.save(customers)

    return customers.map((customer) => {
        return {...customer, hashPassword:undefined, password:undefined}
    })
}
export default listAllCustomersService