import React, { useEffect, useState } from "react";
import PageLayout from "../../layouts/PageLayout";
import { Box } from "@chakra-ui/react";
import { MediaItem } from "../../../types";
import { getData } from "../../hooks/data";

function TvSeries() {
  const [data, setData] = useState<MediaItem[]>([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res as MediaItem[]);
    });
  }, []);

  if (data.length === 0) {
    return <h1>loading</h1>;
  }

  return (
    <Box>
      <PageLayout
        label="Movies"
        data={data.filter((movie) => movie.category === "TV Series")}
      />
    </Box>
  );
}

export default TvSeries;
