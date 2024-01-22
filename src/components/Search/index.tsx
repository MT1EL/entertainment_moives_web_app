import { Box, Flex, Img, Input } from "@chakra-ui/react";
import search from "../../assets/icon-search.svg";
import Colors from "../../Colors.json";
import Text from "../typography";
function index({
  icon,
  err,
  placeholder,
}: {
  icon?: boolean;
  err?: string;
  placeholder: string;
}) {
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
          // alignSelf={"flex-start"}
          h={["1.5rem", "2rem", "2rem"]}
          w={["1.5rem", "2rem", "2rem"]}
        />
      )}
      <Input
        variant={"flushed"}
        placeholder={placeholder}
        borderColor={icon ? "transparent" : Colors["Greyish-Blue"]}
        focusBorderColor={err ? Colors["red"] : Colors["Greyish-Blue"]}
        color={Colors["Pure-White"]}
        fontFamily={"'Outfit', sans-serif"}
        style={{ caretColor: Colors["red"] }}
        h={["1.5rem", "2rem", "2rem"]}
      />
      {err && (
        <Box position={"absolute"} right={"0"} alignSelf={"center"}>
          <Text size="bs" type="err">
            can't be an empty
          </Text>
        </Box>
      )}
    </Flex>
  );
}

export default index;
