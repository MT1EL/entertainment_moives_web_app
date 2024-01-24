import { database } from "../../firebase";
import { getDocs, query, where } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { MediaItem } from "../../types.ts";

function getData() {
  const ref = collection(database, "movies");
  return getDocs(ref)
    .then((res) => {
      let newArr: MediaItem[] = [];
      res.forEach((doc) => newArr.push(doc.data() as MediaItem));
      return newArr;
    })
    .catch((err) => console.log(err));
}

function getTrendings() {
  const ref = collection(database, "movies");
  const myQuery = query(ref, where("isTrending", "==", true));
  return getDocs(myQuery)
    .then((res) => {
      let newArr: MediaItem[] = [];
      res.forEach((doc) => newArr.push(doc.data() as MediaItem));
      return newArr;
    })
    .catch((err) => console.log(err));
}

function getMovies() {
  const ref = collection(database, "movies");
  const myQuery = query(ref, where("category", "==", "Movie"));
  return getDocs(myQuery)
    .then((res) => {
      let newArr: MediaItem[] = [];
      res.forEach((doc) => newArr.push(doc.data() as MediaItem));
      return newArr;
    })
    .catch((err) => console.log(err));
}
function getTvSeries() {
  const ref = collection(database, "movies");
  const myQuery = query(ref, where("category", "==", "TV Series"));
  return getDocs(myQuery)
    .then((res) => {
      let newArr: MediaItem[] = [];
      res.forEach((doc) => newArr.push(doc.data() as MediaItem));
      return newArr;
    })
    .catch((err) => console.log(err));
}

export { getData, getTrendings, getMovies, getTvSeries };
