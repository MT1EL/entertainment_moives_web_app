import { Box, Flex, Img } from "@chakra-ui/react";
import Text from "../typography/";
import Oval from "../Oval/";
import { MediaItem } from "../../../types";
import Overlay from "../shared/Overlay";

function TrendingMovieBanner({
  data,
  trending,
}: {
  data: MediaItem;
  trending: boolean;
}) {
  const { thumbnail, title, year, category, rating } = data;

  return (
    <Box
      position={"relative"}
      // maxW={["240px", "470px"]}
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
        <Overlay trending />
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
          <Text size={"bs"}>{category}</Text>
          <Oval />
          <Text size={"bs"}>{rating}</Text>
        </Flex>
        <Text size="hxxs">{title}</Text>
      </Flex>
    </Box>
  );
}

export default TrendingMovieBanner;
