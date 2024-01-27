import { Flex } from "@chakra-ui/react";
import Authentication from "../../layouts/Authentication";
import { useRegister } from "../../hooks/authentication";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { RegisterInitialValues } from "../../formData/initialValues";
import { RegisterValidationSchema } from "../../formData/validationSchemas";
function Register() {
  const navigate = useNavigate();
  const RegisterFormikSubmitFunction = (values: {
    Password: string;
    email: string;
    username: string;
  }) => {
    useRegister(values.email, values.Password, values.username)
      .then((res) => navigate("/"))
      .catch((err) => {
        console.log(err);
      });
  };
  //REGISTER FORMIK
  const formik = useFormik({
    initialValues: RegisterInitialValues,
    validationSchema: RegisterValidationSchema,
    onSubmit: RegisterFormikSubmitFunction,
  });

  return (
    <Flex flex={1} maxW="100%">
      <Authentication
        label={"Sign Up"}
        formik={formik}
        buttonLabel={"Create an account"}
        footer_paragraph={"Already have an account?"}
        footer_link={"Login"}
        footer_link_href={"/login"}
        onSubmit={formik.handleSubmit}
        error={formik.errors}
      />
    </Flex>
  );
}

export default Register;
