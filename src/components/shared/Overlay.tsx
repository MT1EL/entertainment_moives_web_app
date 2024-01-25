import { Flex, Img } from "@chakra-ui/react";
import Colors from "../../Colors.json";
import bookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import bookmarkedFull from "../../assets/icon-bookmark-full.svg";

import Play from "../Button/Play";
function Overlay({
  trending,
  handleClick,
  bookmarked,
}: {
  handleClick?: any;
  trending: boolean;
  bookmarked?: boolean;
}) {
  return (
    <Flex
      position={"absolute"}
      inset={"0 0 0 0"}
      borderRadius={"0.5rem"}
      bg={
        trending
          ? `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)`
          : "transparent"
      }
      _groupHover={{
        bg: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)`,
      }}
      transition={"bg 300ms ease "}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        w="2rem"
        h="2rem"
        borderRadius={"50%"}
        bg={Colors["Dark-Blue"]}
        _hover={{ backgroundColor: Colors["Greyish-Blue"] }}
        position={"absolute"}
        top="1rem"
        right={"1rem"}
        alignItems={"center"}
        justifyContent={"center"}
        cursor={"pointer"}
        onClick={() => handleClick()}
      >
        <Img src={bookmarked ? bookmarkedFull : bookmarkEmpty} alt="bookmark" />
      </Flex>
      <Play />
    </Flex>
  );
}

export default Overlay;
