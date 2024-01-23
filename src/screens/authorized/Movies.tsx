import React, { useEffect, useState } from "react";
import { MediaItem } from "../../../types";
import { getData } from "../../hooks/data";
import { Box } from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";

function Movies() {
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

export default Movies;
