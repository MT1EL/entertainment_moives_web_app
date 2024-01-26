import PageLayout from "../../layouts/PageLayout";
import { Box, Spinner } from "@chakra-ui/react";
import { getTvSeries } from "../../hooks/data";
import { useQuery } from "react-query";
import { getUser } from "../../hooks/user";
function TvSeries({ id }: { id: string }) {
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
        data={tvSeriesData}
        bookMarkedMovies={user ? user.bookMarkedMovies : []}
        id={id}
        refresh={refetch}
      />
    </Box>
  );
}

export default TvSeries;
