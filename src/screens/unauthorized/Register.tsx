import { Flex } from "@chakra-ui/react";
import Authentication from "../../layouts/Authentication";
import { useState } from "react";
import { useRegister } from "../../hooks/authentication";
import { useFormik } from "formik";
import { auth } from "../../../firebase";
function Register() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: (values) => {
      if (values.password === values.repeatPassword) {
        useRegister(values.email, values.password)
          .then((res) => res)
          .catch((err) => err);
      } else {
        console.log("password should be same");
      }
    },
  });
  return (
    <Flex flex={1} maxW="100%">
      <Authentication
        label={"Sign Up"}
        inputs={[
          { label: "email", name: "email", setFunction: formik.handleChange },
          {
            label: "Password",
            name: "password",
            setFunction: formik.handleChange,
          },
          {
            label: "Repeat Password",
            name: "repeatPassword",
            setFunction: formik.handleChange,
          },
        ]}
        buttonLabel={"Create an account"}
        footer_paragraph={"Already have an account?"}
        footer_link={"Login"}
        footer_link_href={"/login"}
        onSubmit={formik.handleSubmit}
      />
    </Flex>
  );
}

export default Register;
