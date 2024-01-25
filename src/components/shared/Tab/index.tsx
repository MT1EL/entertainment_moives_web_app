import { Box } from "@chakra-ui/react";
import { Dispatch } from "react";
import Colors from "../../../Colors.json";
import Text from "../../typography/";

function index({
  handleClick,
  children,
}: {
  handleClick: Dispatch<any>;
  children: string;
}) {
  return (
    <Box
      bg={Colors["Greyish-Blue"]}
      py="0.5rem"
      px="1rem"
      borderRadius={".5rem"}
      onClick={handleClick}
      cursor={"pointer"}
    >
      <Text size={"bm"}>{children}</Text>
    </Box>
  );
}

export default index;
