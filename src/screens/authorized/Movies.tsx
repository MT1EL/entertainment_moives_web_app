import { getMovies } from "../../hooks/data";
import { Box, Spinner } from "@chakra-ui/react";
import { useQuery } from "react-query";
import PageLayout from "../../layouts/PageLayout";
import { getUser } from "../../hooks/user";

function Movies({ id, keyWord }: { id: string; keyWord: string }) {
  const { data: user, refetch } = useQuery("USER_BOOKMARKED", () =>
    getUser(id)
  );
  const { data } = useQuery("MOVIES", getMovies);

  if (!data) {
    return <Spinner size={"xl"} alignSelf={"center"} />;
  }

  return (
    <PageLayout
      label="Movies"
      data={
        keyWord !== ""
          ? data.filter((movie) =>
              movie.title
                .toLocaleLowerCase()
                .includes(keyWord.toLocaleLowerCase())
            )
          : data
      }
      bookMarkedMovies={user ? user.bookMarkedMovies : []}
      id={id}
      refresh={refetch}
    />
  );
}

export default Movies;
