import * as yup from "yup";
import { Schema } from "yup";
import { iCustomerLogin } from "../interfaces";

const loginSchema: Schema<iCustomerLogin> = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});
export default loginSchema;
