import { Box, Spinner } from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";
import { getData, getTrendings } from "../../hooks/data";
import { useQuery } from "react-query";
function Home() {
  const { data } = useQuery("ALL_MOVIES", getData);
  const { data: trendingsData } = useQuery("TRENDING_MOVIES", getTrendings);

  if (!data || !trendingsData) {
    return <Spinner size={"xl"} alignSelf={"center"} />;
  }
  return (
    <Box>
      <PageLayout label="Trending" data={trendingsData} trending />
      <PageLayout label="Recommended for you" data={data} />
    </Box>
  );
}

export default Home;
