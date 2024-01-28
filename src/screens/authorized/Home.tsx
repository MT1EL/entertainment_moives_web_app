import { Box, Spinner } from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";
import { getData, getTrendings } from "../../hooks/data";
import { useQuery } from "react-query";
import { getUser } from "../../hooks/user";
function Home({ id, keyWord }: { id: string; keyWord: string }) {
  const { data: user, refetch } = useQuery("USER_BOOKMARKED", () =>
    getUser(id)
  );
  const { data } = useQuery("ALL_MOVIES", getData);
  const { data: trendingsData } = useQuery("TRENDING_MOVIES", getTrendings);
  if (!data || !trendingsData) {
    return <Spinner size={"xl"} alignSelf={"center"} />;
  }
  return (
    <Box>
      <PageLayout
        label="Trending"
        data={
          keyWord !== ""
            ? trendingsData.filter((movie) =>
                movie.title
                  .toLocaleLowerCase()
                  .includes(keyWord.toLocaleLowerCase())
              )
            : trendingsData
        }
        trending
        id={id}
        bookMarkedMovies={user ? user.bookMarkedMovies : []}
        refresh={refetch}
      />
      <PageLayout
        label="Recommended for you"
        data={
          keyWord !== ""
            ? data.filter((movie) =>
                movie.title
                  .toLocaleLowerCase()
                  .includes(keyWord.toLocaleLowerCase())
              )
            : data
        }
        bookMarkedMovies={user ? user.bookMarkedMovies : []}
        id={id}
        refresh={refetch}
      />
    </Box>
  );
}

export default Home;
