import { Box } from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";
import Button from "../../components/Button";
import { auth } from "../../../firebase";
import { useEffect, useState } from "react";
import { database } from "../../../firebase";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
function Home() {
  const [data, setData] = useState<MediaItem[]>([]);

  useEffect(() => {
    const ref = collection(database, "movies");
    getDocs(ref)
      .then((res) => {
        let newArr: MediaItem[] = [];
        res.forEach((doc) => newArr.push(doc.data() as MediaItem));
        setData(newArr);
      })
      .catch((err) => console.log(err));
    // return querySnapshot;
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

type MediaItem = {
  category: string;
  isBookmarked: boolean;
  isTrending: boolean;
  rating: string;

  thumbnail: {
    regular: {
      large: string;
      medium: string;
      small: string;
    };
    trending: {
      large: string;
      small: string;
    };
  };
  title: string;
  year: number;
};
