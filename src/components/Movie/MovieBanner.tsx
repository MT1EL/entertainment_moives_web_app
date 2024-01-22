import { Box, Flex, Image } from "@chakra-ui/react";
import Text from "../typography/";
import Oval from "../Oval/";
import img from "../../assets/thumbnails/112/regular/small.jpg";
type MediaItem = {
  data: {
    title: string;
    thumbnail: {
      trending: {
        small: string;
        large: string;
      };
      regular: {
        small: string;
        medium: string;
        large: string;
      };
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
  };
};
function MovieBanner({ data }: MediaItem) {
  const { title, year, category, rating } = data;

  return (
    <Box>
      <Box position={"relative"}>
        <Image
          src={img}
          alt="banner"
          maxW={["164px", "220px", "280px"]}
          borderRadius={"0.5rem"}
        />
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
