import { Button } from "@chakra-ui/react";
import Colors from "../../Colors.json";

function index({ children, onClick }: { children: string; onClick: any }) {
  return (
    <Button
      w="100%"
      borderRadius={"6px"}
      bg={Colors["red"]}
      color={Colors["Pure-White"]}
      _hover={{ bg: Colors["Pure-White"], color: Colors["Semi-Dark-Blue"] }}
      maxW="330px"
      fontFamily={"'Outfit', sans-serif"}
      fontSize={"15px"}
      fontWeight={"300"}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default index;
