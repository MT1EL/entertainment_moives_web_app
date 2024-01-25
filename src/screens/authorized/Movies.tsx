import { getTrendings } from "../../hooks/data";
import { Box, Spinner } from "@chakra-ui/react";
import { useQuery } from "react-query";
import PageLayout from "../../layouts/PageLayout";

function Movies() {
  const { data: trendingsData } = useQuery("TRENDING_MOVIES", getTrendings);

  if (!trendingsData) {
    return <Spinner size={"xl"} alignSelf={"center"} />;
  }

  return (
    <Box>
      <PageLayout label="Movies" data={trendingsData} />
    </Box>
  );
}

export default Movies;
