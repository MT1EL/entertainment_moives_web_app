import { Box, Flex, Img, Input } from "@chakra-ui/react";
import search from "../../assets/icon-search.svg";
import Colors from "../../Colors.json";
import CustomText from "../typography/CustomText";
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
    <Flex w="100%" gap="1.5rem" position={"relative"}>
      {icon && <Img src={search} alt="search" alignSelf={"flex-start"} />}
      <Input
        variant={"flushed"}
        placeholder={placeholder}
        borderColor={icon ? "transparent" : Colors["Greyish-Blue"]}
        focusBorderColor={err ? Colors["red"] : Colors["Greyish-Blue"]}
        color={Colors["Pure-White"]}
        fontFamily={"'Outfit', sans-serif"}
        style={{ caretColor: Colors["red"] }}
      />
      {err && (
        <Box position={"absolute"} right={"0"} alignSelf={"center"}>
          <CustomText size="bs" type="err">
            can't be an empty
          </CustomText>
        </Box>
      )}
    </Flex>
  );
}

export default index;
