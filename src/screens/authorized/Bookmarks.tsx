import { useQuery } from "react-query";
import { getUser } from "../../hooks/user";
import { Spinner } from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";
type BookMarksType = {
  id: string;
  keyWord: string;
  user: any;
};
function Bookmarks({ id, keyWord, user }: BookMarksType) {
  const { data, refetch } = useQuery("USER_BOOKMARKED", () => getUser(id));
  if (!data) {
    return <Spinner />;
  }

  return (
    <PageLayout
      label="Bookmarked"
      data={
        keyWord !== ""
          ? data.bookMarkedMovies.filter((movie) =>
              movie.title
                .toLocaleLowerCase()
                .includes(keyWord.toLocaleLowerCase())
            )
          : data.bookMarkedMovies
      }
      bookMarkedMovies={data.bookMarkedMovies}
      id={id}
      refresh={refetch}
    />
  );
}

export default Bookmarks;
