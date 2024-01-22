import { Box, Flex, FormControl } from "@chakra-ui/react";
import Colors from "../Colors.json";
import CustomText from "../components/typography/CustomText";
import Input from "../components/Search/index";
import Button from "../components/Button/index";
import { Link } from "react-router-dom";
type AuthenticationLayoutProps = {
  label: string;
  inputs: { label: string }[];
  buttonLabel: string;
  footer_paragraph: string;
  footer_link: string;
  footer_link_href: string;
};
function Authentication({
  label,
  inputs,
  buttonLabel,
  footer_paragraph,
  footer_link,
  footer_link_href,
}: AuthenticationLayoutProps) {
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
      <CustomText size="hl">{label}</CustomText>
      <FormControl gap="24px" display={"flex"} flexDir={"column"}>
        {inputs.map((input) => (
          <Input key={input.label} placeholder={input.label} />
        ))}
        <Button>{buttonLabel}</Button>
        <Flex gap="0.25rem" justifyContent={"center"}>
          <CustomText size={"bm"}>{footer_paragraph}</CustomText>
          <Link to={footer_link_href}>
            <CustomText type="err" size={"bm"}>
              {footer_link}
            </CustomText>
          </Link>
        </Flex>
      </FormControl>
    </Flex>
  );
}

export default Authentication;
