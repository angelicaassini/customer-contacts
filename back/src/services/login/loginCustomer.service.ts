import AppDataSource from "../../data-source";
import Customer from "../../entities/customer.entity";
import AppError from "../../errors/AppError";
import "dotenv/config";

import jwt from "jsonwebtoken";

import { iCustomerLogin, iCustomerResponse } from "../../interfaces";
import { compare } from "bcryptjs";

export interface iResponse{
  token: string,
  customerId:string
  customerFound: iCustomerResponse
}

const loginCustomerService = async (
  customerData: iCustomerLogin
): Promise<iResponse> => {
  console.log("chegou aquino service!!!!!!!!!!!!!!!!!")
  const customerRepository = AppDataSource.getRepository(Customer);

  const findCustomer = await customerRepository.findOneBy({
    email: customerData.email,
  });

  if (!findCustomer) {
    throw new AppError("Email or password invalid.", 403);
  }
 
  const passwordMatch = await compare(
    customerData.password,
    findCustomer.password
  );
  console.log("passWordMatch:", passwordMatch)
  if (!passwordMatch) {
    throw new AppError("Email or password invalid.", 403);
  }


  const token = jwt.sign(
    {
      isActive: findCustomer.isActive,
    },
    process.env.SECRET_KEY!,
    {
      subject: findCustomer.id,
      expiresIn: "24h",
    }
  );

  if (!findCustomer.isActive) {
    throw new AppError("This customer isn't active.", 403);
  }

  // localStorage.setItem("@INFINITY-CUSTOMER", findCustomer.id);
  const customerId = findCustomer.id
  const {password, ...customerFound} = findCustomer
  const resposta = {token, customerId, customerFound}
  
  return resposta;
};
export default loginCustomerService;

