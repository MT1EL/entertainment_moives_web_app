import { Box, Flex, Image, Img } from "@chakra-ui/react";
import Text from "../typography/";
import Oval from "../Oval/";
import Colors from "../../Colors.json";
import bookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../../assets/icon-bookmark-full.svg";
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
  const { thumbnail, title, year, category, rating } = data;

  return (
    <Box>
      <Box position={"relative"}>
        <Image
          src={thumbnail.regular?.large}
          alt="banner"
          maxW={["164px", "220px", "280px"]}
          borderRadius={"0.5rem"}
        />
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
        >
          <Img src={bookmarkEmpty} alt="bookmark" />
        </Flex>
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
