import { Box } from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";
import { useEffect, useState } from "react";
import { getData } from "../../hooks/data";
import { MediaItem } from "../../../types.ts";
function Home() {
  const [data, setData] = useState<MediaItem[]>([]);

  useEffect(() => {
    getData().then((res) => setData(res as MediaItem[]));
  }, []);

  if (data.length === 0) {
    return <h1>loading</h1>;
  }

  return (
    <Box>
      <PageLayout label="Movies" data={data} />
      {/* <Button onClick={() => auth.signOut()}>Sign out</Button> */}
    </Box>
  );
}

export default Home;
