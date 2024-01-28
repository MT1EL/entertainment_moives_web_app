import { useQuery } from "react-query";
import { getUser } from "../../hooks/user";
import { Spinner } from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";

function Bookmarks({ id, keyWord }: { id: string; keyWord: string }) {
  const { data, refetch } = useQuery("USER_BOOKMARKED", () => getUser(id));
  if (!data) {
    return <Spinner />;
  }
  return (
    <PageLayout
      label="Bookmarked"
      data={data.bookMarkedMovies}
      bookMarkedMovies={data.bookMarkedMovies}
      id={id}
      refresh={refetch}
    />
  );
}

export default Bookmarks;
