import { UserType } from "./../../types";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { uploadString } from "firebase/storage";
import { database } from "../../firebase";

function getUser() {
  const ref = doc(database, "users", "MT1EL");
  return getDoc(ref)
    .then((res): any => {
      return res.data();
    })
    .catch((err) => console.log(err));
}

function updateUser(updatedUser: UserType) {
  const ref = doc(database, "users", "MT1EL");
  return updateDoc(ref, updatedUser)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

export { getUser, updateUser };
