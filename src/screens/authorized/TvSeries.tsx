import PageLayout from "../../layouts/PageLayout";
import { Box, Spinner } from "@chakra-ui/react";
import { getTvSeries } from "../../hooks/data";
import { useQuery } from "react-query";
function TvSeries() {
  const { data: tvSeriesData } = useQuery("TRENDING_MOVIES", getTvSeries);

  if (!tvSeriesData) {
    return <Spinner size={"xl"} alignSelf={"center"} />;
  }

  return (
    <Box>
      <PageLayout label="TV Series" data={tvSeriesData} />
    </Box>
  );
}

export default TvSeries;
