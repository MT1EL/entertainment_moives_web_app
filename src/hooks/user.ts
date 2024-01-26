import { MediaItem, UserType } from "./../../types";
import { doc, getDoc, updateDoc, setDoc, deleteDoc } from "firebase/firestore";
import { database } from "../../firebase";
function addUser(id: string) {
  const ref = doc(database, "users", id);
  return setDoc(ref, { bookMarkedMovies: [] })
    .then((res): any => {
      console.log(res);
    })
    .catch((err) => console.log(err));
}

function getUser(id: string) {
  const ref = doc(database, "users", id);
  return getDoc(ref)
    .then((res): any => res.data())
    .catch((err) => err);
}

function updateUser(updatedUser: UserType) {
  const ref = doc(database, "users", "MT1EL");
  return updateDoc(ref, updatedUser)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
function updateBookMark(
  bookMarkedMovies: MediaItem[],
  id: string,
  movie: MediaItem
) {
  const bookmarkRef = doc(database, "users", id);
  const existingMovieIndex = bookMarkedMovies.findIndex(
    (bookMarkedMovie) => bookMarkedMovie.title === movie.title
  );
  if (existingMovieIndex === -1) {
    const updatedBookmarkedMovies = [movie, ...bookMarkedMovies];
    return updateDoc(bookmarkRef, { bookMarkedMovies: updatedBookmarkedMovies })
      .then((res) => res)
      .catch((err) => err);
  } else {
    const updatedBookmarkedMovies = bookMarkedMovies.filter(
      (bookMarkedMovie) => bookMarkedMovie.title !== movie.title
    );
    return updateDoc(bookmarkRef, { bookMarkedMovies: updatedBookmarkedMovies })
      .then((res) => res)
      .catch((err) => err);
  }
}
function deleteUser(id: string) {
  const ref = doc(database, "users", id);
  return deleteDoc(ref)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

export { getUser, updateUser, updateBookMark, addUser, deleteUser };
