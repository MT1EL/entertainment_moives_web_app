import * as yup from "yup";
export const LoginValidationSchema = yup.object({
  email: yup.string().email().required("required"),
  Password: yup.string().required("Password is required"),
});
export const RegisterValidationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  username: yup.string().required(),
  "Phone number": yup.number(),
  Password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  "Repeat password": yup
    .string()
    .oneOf([yup.ref("Password")], "Passwords must match"),
});

export const SecurityValidationSchema = yup.object({
  "NEW PASSWORD": yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  "REPEAT NEW PASSWORD": yup
    .string()
    .oneOf([yup.ref("NEW PASSWORD")], "Passwords must match"),
});
