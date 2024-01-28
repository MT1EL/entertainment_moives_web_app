import Authentication from "../../layouts/Authentication";
import { Flex, useToast } from "@chakra-ui/react";
import { useLogin } from "../../hooks/authentication";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { LoginInitialValues } from "../../formData/initialValues";
import { LoginValidationSchema } from "../../formData/validationSchemas";
import { useTranslation } from "react-i18next";
function Login() {
  const { t } = useTranslation();
  const toast = useToast();
  const navigate = useNavigate();
  //LOGIN FORMIK SUBMIT FUNCTION
  const loginSubmitFunction = (values: { email: string; Password: string }) => {
    useLogin(
      values.email,
      values.Password,
      () => {
        navigate("/");
        toast({
          title: t("Loged in Successful"),
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      },
      () => {
        formik.setErrors({ Password: "wrong credentials" });
        toast({
          title: t("Login Failed"),
          description: t("Wrong credentials entered."),
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    )
      .then((res) => res)
      .catch((err) => err);
  };
  //LOGIN FORMIK
  const formik = useFormik({
    initialValues: LoginInitialValues,
    validationSchema: LoginValidationSchema,
    onSubmit: loginSubmitFunction,
  });
  return (
    <Flex flex={1} maxW="100%">
      <Authentication
        label={"Log In"}
        buttonLabel={"Log in to your account"}
        footer_paragraph={"Don't have an account?"}
        footer_link={"Sign Up"}
        footer_link_href="/register"
        onSubmit={formik.handleSubmit}
        error={formik.errors}
        formik={formik}
      />
    </Flex>
  );
}

export default Login;
