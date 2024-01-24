import { useEffect, useState } from "react";
import PageLayout from "../../layouts/PageLayout";
import { Box, Spinner } from "@chakra-ui/react";
import { MediaItem } from "../../../types";
import { getTvSeries } from "../../hooks/data";
import Colors from "../../Colors.json";
function TvSeries() {
  const [data, setData] = useState<MediaItem[]>([]);

  useEffect(() => {
    getTvSeries().then((res) => {
      setData(res as MediaItem[]);
    });
  }, []);

  if (data.length === 0) {
    return <Spinner size={"xl"} alignSelf={"center"} />;
  }

  return (
    <Box>
      <PageLayout
        label="TV Series"
        data={data.filter((movie) => movie.category === "TV Series")}
      />
    </Box>
  );
}

export default TvSeries;
