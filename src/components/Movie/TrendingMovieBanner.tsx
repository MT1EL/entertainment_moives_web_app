import { Box, Flex, Img } from "@chakra-ui/react";
import Text from "../typography/";
import Oval from "../Oval/";
import { MovieBannerType } from "../../../types";
import Overlay from "../shared/Overlay";
import { useTranslation } from "react-i18next";

function TrendingMovieBanner({
  data,
  bookMarkHandler,
  bookmarked,
}: MovieBannerType) {
  const { thumbnail, title, year, category, rating } = data;
  const { t } = useTranslation();

  return (
    <Box
      position={"relative"}
      maxH={["140px", "230px"]}
      borderRadius={"0.5rem"}
      overflow={"hidden"}
      w="100%"
    >
      <Box
        position={"relative"}
        role="group"
        cursor={"pointer"}
        overflow={"hidden"}
      >
        <Img
          src={thumbnail?.trending?.large}
          alt="trending banner"
          w="100%"
          h="100%"
        />
        <Overlay
          trending
          handleClick={bookMarkHandler}
          bookmarked={bookmarked}
        />
      </Box>
      <Flex
        position={"absolute"}
        left="1.5rem"
        bottom="1.5rem"
        flexDir={"column"}
        gap="5px"
        marginTop={"0.5rem"}
      >
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

export default TrendingMovieBanner;
