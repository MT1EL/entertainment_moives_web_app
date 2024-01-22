import { Flex, FormControl } from "@chakra-ui/react";
import Colors from "../Colors.json";
import Text from "../components/typography";
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
      <Text size="hl">{label}</Text>
      <FormControl gap="24px" display={"flex"} flexDir={"column"}>
        {inputs.map((input) => (
          <Input key={input.label} placeholder={input.label} />
        ))}
        <Button>{buttonLabel}</Button>
        <Flex gap="0.25rem" justifyContent={"center"}>
          <Text size={"bm"}>{footer_paragraph}</Text>
          <Link to={footer_link_href}>
            <Text type="err" size={"bm"}>
              {footer_link}
            </Text>
          </Link>
        </Flex>
      </FormControl>
    </Flex>
  );
}

export default Authentication;
