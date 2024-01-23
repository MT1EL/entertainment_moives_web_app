import { Box } from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";
import moviesData from "../../../data.json";
import Button from "../../components/Button";
import { auth } from "../../../firebase";
function Home() {
  return (
    <Box>
      <PageLayout label="Movies" data={moviesData} title="Movies" />
      <Button onClick={() => auth.signOut()}>Sign out</Button>
    </Box>
  );
}

export default Home;
