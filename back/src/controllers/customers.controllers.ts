import { Request, Response } from "express";
import { iCustomerRequest, iCustomerUpdateRequest } from "../interfaces";
import createCustomerService from "../services/customer/createCustomer.service";
import deleteCustomerService from "../services/customer/deleteCustomer.service";
import getCustomerService from "../services/customer/getCustomer.service";
import listAllCustomersService from "../services/customer/listAllCustomers.service";
import updateCustomerService from "../services/customer/updateCustomer.service";
import getContactByCustomerService from "../services/customer/getContactByCustomer.service";

export const createCustomerController = async (req: Request, res: Response) => {
  const customerData: iCustomerRequest = req.body;
  const data = await createCustomerService(customerData);
  return res.status(201).json(data);
};

export const getCustomerController = async (req: Request, res: Response) => {
  const params_id: string = req.params.id;
  const data = await getCustomerService(params_id);
  return res.status(200).json(data);
};

export const getContactsByCustomerController = async (req: Request, res: Response) => {
  const params_id: string = req.params.id;
  const data = await getContactByCustomerService(params_id);
  return res.status(200).json(data);
};

export const listAllCustomersController = async (
  req: Request,
  res: Response
) => {
  const data = await listAllCustomersService();
  return res.status(200).json(data);
};

export const updateCustomerController = async (req: Request, res: Response) => {
  const customerData: iCustomerUpdateRequest = req.body;
  const params_id: string = req.params.id;
  const data = await updateCustomerService(customerData, params_id);
  return res.status(200).json(data);
};

export const deleteCustomerController = async (req: Request, res: Response) => {
  const params_id: string = req.params.id;
  await deleteCustomerService(params_id);
  return res.status(204).json({});
};
