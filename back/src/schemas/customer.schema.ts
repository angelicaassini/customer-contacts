import * as yup from "yup";
import { Schema } from "yup";
import { iCustomerRequest, iCustomerResponse, iCustomerUpdateRequest } from "../interfaces";
import  {contactRequestSchema, contactResponseSchema}  from "./contact.schema";

export const customerRequestSchema: Schema<iCustomerRequest|any> = yup
  .object()
  .shape({
    customer_name: yup.string().required(),
    CNPJ: yup.number().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    
  });

  export const customerResponseSchema: Schema<iCustomerResponse|any> = yup
  .object()
  .shape({
    id: yup.string(),
    customer_name: yup.string().required(),
    CNPJ: yup.number().required(),
    email: yup.string().required(),
    isActive: yup.boolean().default(true),
    createdAt: yup.date(),
    updatedAt: yup.date(),
    contacts: yup.array().of(contactResponseSchema)
  });

export const customerUpdateRequestSchema: Schema<iCustomerUpdateRequest|any> = yup.object().shape({
    customer_name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    password: yup.string().notRequired(),
})

export const customerContactResponseSchema: Schema<iCustomerResponse|any> = yup
.object()
.shape({
  customer_name: yup.string(),
  CNPJ: yup.number(),
  email: yup.string()
});
