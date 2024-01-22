import { Flex } from "@chakra-ui/react";
import Authentication from "../../layouts/Authentication";
function Register() {
  return (
    <Flex flex={1} maxW="100%">
      <Authentication
        label={"Sign Up"}
        inputs={[
          { label: "email" },
          { label: "Password" },
          { label: "Repeat Password" },
        ]}
        buttonLabel={"Create an account"}
        footer_paragraph={"Already have an account?"}
        footer_link={"Login"}
        footer_link_href={"login"}
      />
    </Flex>
  );
}

export default Register;
