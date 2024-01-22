import { Box } from "@chakra-ui/react";
import Colors from "../../Colors.json";

function index() {
  return (
    <Box
      w="3px"
      h="3px"
      bg={Colors["Pure-White"]}
      opacity={".5"}
      borderRadius={"50%"}
    />
  );
}

export default index;
