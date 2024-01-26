import { Flex, Grid } from "@chakra-ui/react";
import Text from "../components/typography";
import TrendingCarousel from "../components/shared/TrendingCarousel";
import { MediaItem } from "../../types";
import MovieBanner from "../components/Movie/MovieBanner";
import { updateBookMark } from "../hooks/user";
function PageLayout({
  label,
  data,
  trending,
  bookMarkedMovies,
  refresh,
  id,
}: {
  trending?: boolean;
  label: string;
  data: MediaItem[];
  bookMarkedMovies: MediaItem[];
  id: string;
  refresh: any;
}) {
  return (
    <Flex
      flexDir={"column"}
      gap={["1.5rem", "1.5rem", "2.375rem"]}
      marginTop={["1.625rem", "2.25rem"]}
    >
      <Text size={"hl"}>{label}</Text>
      {trending ? (
        <TrendingCarousel
          data={data}
          bookMarkedMovies={bookMarkedMovies}
          id={id}
          refresh={refresh}
        />
      ) : (
        <Grid
          gridTemplateColumns={[
            "repeat(auto-fit, minmax(164px, 1fr))",
            "repeat(auto-fit, minmax(220px, 1fr))",
            "repeat(auto-fit, minmax(280px, 1fr))",
            "repeat(auto-fit, minmax(300px, 1fr))",
          ]}
          columnGap={"1rem"}
          rowGap={"2rem"}
        >
          {data.map((movie) => (
            <MovieBanner
              data={movie}
              key={movie.title}
              bookMarkHandler={() => {
                updateBookMark(bookMarkedMovies, id, movie)
                  .then((res) => refresh())
                  .catch((err) => err);
              }}
              bookmarked={
                bookMarkedMovies.findIndex(
                  (bookMarkedMovie) => bookMarkedMovie.title === movie.title
                ) > -1
              }
            />
          ))}
        </Grid>
      )}
    </Flex>
  );
}

export default PageLayout;
