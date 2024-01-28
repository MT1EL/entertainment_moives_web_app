import { Flex } from "@chakra-ui/react";
import Colors from "../Colors.json";
import Text from "../components/typography";
import Input from "../components/Search/index";
import Button from "../components/Button/index";
import { Link } from "react-router-dom";
import { AuthenticationLayoutProps } from "../../types";

function Authentication({
  label,
  buttonLabel,
  footer_paragraph,
  footer_link,
  footer_link_href,
  onSubmit,
  formik,
}: AuthenticationLayoutProps) {
  const passwordTypes = ["Password", "Repeat password"];
  return (
    <Flex
      flexDir={"column"}
      p="2rem"
      bg={Colors["Semi-Dark-Blue"]}
      borderRadius={"20px"}
      gap="40px"
      mx="auto"
      my="auto"
      w="400px"
      maxWidth={"100%"}
    >
      <Text size="hl">{label}</Text>
      <Flex gap="24px" flexDir={"column"}>
        {Object.keys(formik.initialValues).map((input) => (
          <Input
            key={input}
            placeholder={input}
            setFunction={formik.handleChange}
            name={input}
            type={passwordTypes.includes(input) ? "password" : "email"}
            error={formik.errors[input]}
            handleBlur={formik.handleBlur}
            touched={formik.touched[input]}
          />
        ))}
        <Button onClick={onSubmit}>{buttonLabel}</Button>
        <Flex gap="0.25rem" justifyContent={"center"}>
          <Text size={"bm"}>{footer_paragraph}</Text>
          <Link to={footer_link_href}>
            <Text size={"bm"} color={Colors["red"]}>
              {footer_link}
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Authentication;
