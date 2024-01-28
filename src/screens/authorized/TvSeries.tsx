import PageLayout from "../../layouts/PageLayout";
import { Box, Spinner } from "@chakra-ui/react";
import { getTvSeries } from "../../hooks/data";
import { useQuery } from "react-query";
import { getUser } from "../../hooks/user";
function TvSeries({ id, keyWord }: { id: string; keyWord: string }) {
  const { data: user, refetch } = useQuery("USER_BOOKMARKED", () =>
    getUser(id)
  );
  const { data: tvSeriesData } = useQuery("TRENDING_MOVIES", getTvSeries);

  if (!tvSeriesData) {
    return <Spinner size={"xl"} alignSelf={"center"} />;
  }

  return (
    <Box>
      <PageLayout
        label="TV Series"
        data={
          keyWord !== ""
            ? tvSeriesData.filter((movie) =>
                movie.title
                  .toLocaleLowerCase()
                  .includes(keyWord.toLocaleLowerCase())
              )
            : tvSeriesData
        }
        bookMarkedMovies={user ? user.bookMarkedMovies : []}
        id={id}
        refresh={refetch}
      />
    </Box>
  );
}

export default TvSeries;
