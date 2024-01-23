import Authentication from "../../layouts/Authentication";
import { Flex } from "@chakra-ui/react";
import { useLogin } from "../../hooks/authentication";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      useLogin(values.email, values.password)
        .then((res) => navigate("/"))
        .catch((err) => err);
    },
  });
  return (
    <Flex flex={1} maxW="100%">
      <Authentication
        label={"Log In"}
        inputs={[
          { label: "email", name: "email", setFunction: formik.handleChange },
          {
            label: "Password",
            name: "password",
            setFunction: formik.handleChange,
          },
        ]}
        buttonLabel={"Login to your account"}
        footer_paragraph={"Don't have an account?"}
        footer_link={"Sign Up"}
        footer_link_href="/"
        onSubmit={formik.handleSubmit}
      />
    </Flex>
  );
}

export default Login;
