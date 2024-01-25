import { getMovies } from "../../hooks/data";
import { Box, Spinner } from "@chakra-ui/react";
import { useQuery } from "react-query";
import PageLayout from "../../layouts/PageLayout";

function Movies() {
  const { data } = useQuery("MOVIES", getMovies);

  if (!data) {
    return <Spinner size={"xl"} alignSelf={"center"} />;
  }

  return (
    <Box>
      <PageLayout label="Movies" data={data} />
    </Box>
  );
}

export default Movies;
