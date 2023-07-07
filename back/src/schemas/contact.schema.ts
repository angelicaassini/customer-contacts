import * as yup from "yup";
import { Schema } from "yup";
import { iContactRequest,  iContactResponse,  iContactUpdateRequest} from "../interfaces";
import { customerContactResponseSchema } from "./customer.schema";

export const contactRequestSchema: Schema<iContactRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
  });

export const contactResponseSchema: Schema<iContactResponse|any> = yup
  .object()
  .shape({
    id: yup.string(),
    name: yup.string(),
    phone: yup.string(),
    email: yup.string(),
    isActive: yup.boolean().default(true),
    createdAt: yup.date(),
    updatedAt: yup.date()
  });


export const contactUpdateRequestSchema: Schema<iContactUpdateRequest|any> = yup.object().shape({
    name: yup.string().notRequired(),
    phone: yup.string().notRequired(),
    email: yup.string().notRequired(),
});

export const contactUpdateResponseSchema: Schema<iContactResponse|any> = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    phone: yup.string(),
    email: yup.string(),
    isActive: yup.boolean().default(true),
    createdAt: yup.date(),
    updatedAt: yup.date(),
});
