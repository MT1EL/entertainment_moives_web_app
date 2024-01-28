import {
  Flex,
  FormControl,
  FormErrorMessage,
  Img,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import search from "../../assets/icon-search.svg";
import Colors from "../../Colors.json";
import Text from "../typography";
import { useTranslation } from "react-i18next";
import { InputType } from "../../../types";
function index({
  icon,
  placeholder,
  setFunction,
  name,
  handleBlur,
  type,
  disabled,
  error,
  touched,
}: InputType) {
  const { t } = useTranslation();
  return (
    <Flex
      alignItems={"center"}
      w="100%"
      gap={["1rem", "1.5rem"]}
      position={"relative"}
    >
      {icon && (
        <Img
          src={search}
          alt="search"
          h={["1.5rem", "2rem", "2rem"]}
          w={["1.5rem", "2rem", "2rem"]}
        />
      )}
      <FormControl isInvalid={(error as undefined) && (touched as boolean)}>
        <InputGroup h={["24px", "32px"]}>
          <InputLeftAddon
            bg="transparent"
            h="100%"
            border="none"
            borderBottom={"1px solid "}
            borderBottomColor={Colors["Greyish-Blue"]}
            display={name === "Phone Number" ? "flex" : "none"}
          >
            <Text size={"bm"}>+995</Text>
          </InputLeftAddon>
          <Input
            variant={"flushed"}
            placeholder={t(placeholder)}
            borderColor={icon ? "transparent" : Colors["Greyish-Blue"]}
            focusBorderColor={error ? Colors["red"] : Colors["Greyish-Blue"]}
            color={Colors["Pure-White"]}
            fontFamily={"'Outfit', sans-serif"}
            style={{ caretColor: Colors["red"] }}
            h={["1.5rem", "2rem", "2rem"]}
            name={name}
            id={name}
            onChange={setFunction}
            onBlur={handleBlur}
            type={type}
            fontSize={["0.8rem", "1rem", "1.2rem"]}
            disabled={disabled}
          />
        </InputGroup>
        <FormErrorMessage fontSize={"14px"} color="red">
          {error}
        </FormErrorMessage>
      </FormControl>
    </Flex>
  );
}

export default index;
