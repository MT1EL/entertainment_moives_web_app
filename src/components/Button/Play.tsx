import { Flex, Img } from "@chakra-ui/react";
import Text from "../typography/";
import play from "../../assets/icon-play.svg";

function Play() {
  return (
    <Flex
      position={"absolute"}
      bottom="-50px"
      borderRadius={"2.5rem"}
      p="0.5rem"
      pr="1.5rem"
      bg={"rgba(255, 255, 255, .25)"}
      alignItems={"center"}
      w="117px"
      gap="19px"
      _groupHover={{ bottom: "50%", transform: "translateY(50%)" }}
      transition={"bottom 300ms ease"}
    >
      <Img src={play} alt="play" />
      <Text size="hxxs">Play</Text>
    </Flex>
  );
}

export default Play;
