import { Box, Flex, Image } from "@chakra-ui/react";
import Text from "../typography/";
import Oval from "../Oval/";
import { MediaItemAsData } from "../../../types";
import Overlay from "../shared/Overlay";
function MovieBanner({ data }: MediaItemAsData) {
  const { thumbnail, title, year, category, rating } = data;
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
          maxW={["164px", "220px", "280px"]}
          borderRadius={"0.5rem"}
        />
        <Overlay trending={false} />
      </Box>
      <Flex flexDir={"column"} gap="5px" marginTop={"0.5rem"}>
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

export default MovieBanner;
