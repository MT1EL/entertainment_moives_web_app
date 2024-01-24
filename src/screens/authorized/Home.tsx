import { Box, Spinner } from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";
import { useEffect, useState } from "react";
import { getData, getTrendings } from "../../hooks/data";
import { MediaItem } from "../../../types.ts";
function Home() {
  const [data, setData] = useState<MediaItem[]>([]);
  const [trending, setTrending] = useState<MediaItem[]>([]);
  useEffect(() => {
    getData().then((res) => setData(res as MediaItem[]));
    getTrendings().then((res) => setTrending(res as MediaItem[]));
  }, []);
  if (data.length === 0) {
    return <Spinner size={"xl"} alignSelf={"center"} />;
  }
  return (
    <Box>
      <PageLayout label="Trending" data={trending} trending />

      <PageLayout label="Recommended for you" data={data} />
    </Box>
  );
}

export default Home;
