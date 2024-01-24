import { Flex, Grid } from "@chakra-ui/react";
import Text from "../components/typography";
import MovieBanner from "../components/Movie/MovieBanner";
import TrendingCarousel from "../components/shared/TrendingCarousel";
import { MediaItem } from "../../types";
function PageLayout({
  label,
  data,
  trending,
}: {
  trending?: boolean;
  label: string;
  data: MediaItem[];
}) {
  return (
    <Flex
      flexDir={"column"}
      gap={["1.5rem", "1.5rem", "2.375rem"]}
      marginTop={["1.625rem", "2.25rem"]}
    >
      <Text size={"hl"}>{label}</Text>
      {trending ? (
        <TrendingCarousel data={data} />
      ) : (
        <Grid
          gridTemplateColumns={[
            "repeat(auto-fit, minmax(164px, 1fr))",
            "repeat(auto-fit, minmax(220px, 1fr))",
            "repeat(auto-fit, minmax(280px, 1fr))",
          ]}
          columnGap={"1rem"}
          rowGap={"2rem"}
        >
          {data.map((movie) => (
            <MovieBanner data={movie} key={movie.title} />
          ))}
        </Grid>
      )}
    </Flex>
  );
}

export default PageLayout;
