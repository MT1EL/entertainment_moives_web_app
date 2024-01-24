import { useEffect, useState } from "react";
import { MediaItem } from "../../../types";
import { getMovies } from "../../hooks/data";
import { Box, Spinner } from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";

function Movies() {
  const [data, setData] = useState<MediaItem[]>([]);

  useEffect(() => {
    getMovies().then((res) => setData(res as MediaItem[]));
  }, []);
  if (data.length === 0) {
    return <Spinner size={"xl"} alignSelf={"center"} />;
  }

  return (
    <Box>
      <PageLayout label="Movies" data={data} />
    </Box>
  );
}

export default Movies;
