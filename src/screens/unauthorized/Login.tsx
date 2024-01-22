import React from "react";
import Authentication from "../../layouts/Authentication";
import { Flex } from "@chakra-ui/react";
function Login() {
  return (
    <Flex flex={1} maxW="100%">
      <Authentication
        label={"Log In"}
        inputs={[{ label: "email" }, { label: "Password" }]}
        buttonLabel={"Login to your account"}
        footer_paragraph={"Don't have an account?"}
        footer_link={"Sign Up"}
        footer_link_href="/"
      />
    </Flex>
  );
}

export default Login;
