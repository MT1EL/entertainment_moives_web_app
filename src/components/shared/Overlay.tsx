import { Flex, Img, useToast } from "@chakra-ui/react";
import Colors from "../../Colors.json";
import bookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import bookmarkedFull from "../../assets/icon-bookmark-full.svg";
import Play from "../Button/Play";
import { useState } from "react";
import { OverlayType } from "../../../types";
import { useTranslation } from "react-i18next";
function Overlay({ trending, handleClick, bookmarked, id }: OverlayType) {
  const { t } = useTranslation();
  const toast = useToast();
  const [localBookmarked, setLocalBookmarked] = useState(bookmarked);
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
        onClick={(e) => {
          if (id) {
            handleClick(e);
            setLocalBookmarked(!localBookmarked);
          } else {
            toast({
              title: t("Please Log in to use these feature"),
              status: "info",
              duration: 5000,
              isClosable: true,
              position: "top-right",
            });
          }
        }}
      >
        <Img
          src={localBookmarked ? bookmarkedFull : bookmarkEmpty}
          alt="bookmark"
        />
      </Flex>
      <Play />
    </Flex>
  );
}

export default Overlay;
