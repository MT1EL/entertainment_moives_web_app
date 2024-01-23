import { database } from "../../firebase";
import { getDocs } from "firebase/firestore";
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

export { getData };
