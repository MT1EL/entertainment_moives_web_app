import { Box } from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";
import moviesData from "../../../data.json";
function Home() {
  return (
    <Box>
      <PageLayout label="Movies" data={moviesData} title="Movies" />
    </Box>
  );
}

export default Home;
