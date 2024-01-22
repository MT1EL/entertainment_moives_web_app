import { Flex } from "@chakra-ui/react";
import Text from "../components/typography";
import MovieBanner from "../components/Movie/MovieBanner";

function PageLayout({ label, data }: { label: string; data: MediaItem[] }) {
  return (
    <Flex
      flexDir={"column"}
      gap={["1.5rem", "1.5rem", "2.375rem"]}
      marginTop={["1.625rem", "2.25rem"]}
    >
      <Text size={"hl"}>{label}</Text>
      <Flex
        gap={["15px", "29px", "40px"]}
        flexWrap={"wrap"}
        justifyContent={["center", "flex-start"]}
      >
        {data.map((movie) => (
          <MovieBanner data={movie} key={movie.title} />
        ))}
      </Flex>
    </Flex>
  );
}

export default PageLayout;

type MediaItem = {
  category: string;
  isBookmarked: boolean;
  isTrending: boolean;
  rating: string;

  thumbnail: {
    regular: {
      large: string;
      medium: string;
      small: string;
    };
    trending: {
      large: string;
      small: string;
    };
  };
  title: string;
  year: number;
};
