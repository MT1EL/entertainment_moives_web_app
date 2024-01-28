import { Box, Flex, Image } from "@chakra-ui/react";
import Text from "../typography/";
import Oval from "../Oval/";
import { MovieBannerType } from "../../../types";
import Overlay from "../shared/Overlay";
import { useTranslation } from "react-i18next";
function MovieBanner({
  data,
  bookMarkHandler,
  bookmarked,
  id,
}: MovieBannerType) {
  const { thumbnail, title, year, category, rating } = data;
  const { t } = useTranslation();

  return (
    <Box position={"relative"} w="fit-content">
      <Box
        position={"relative"}
        role="group"
        cursor={"pointer"}
        overflow={"hidden"}
      >
        <Image
          src={thumbnail.regular?.large}
          alt="banner"
          maxW={["164px", "220px", "280px", "300px"]}
          borderRadius={"0.5rem"}
        />
        <Overlay
          trending={false}
          handleClick={bookMarkHandler}
          bookmarked={bookmarked}
          id={id}
        />
      </Box>
      <Flex flexDir={"column"} gap="5px" marginTop={"0.5rem"}>
        <Flex gap="0.5rem" alignItems={"center"}>
          <Text size={"bs"}>{year}</Text>
          <Oval />
          <Text size={"bs"}>{t(category)}</Text>
          <Oval />
          <Text size={"bs"}>{rating}</Text>
        </Flex>
        <Text size="hxxs">{t(title)}</Text>
      </Flex>
    </Box>
  );
}

export default MovieBanner;
