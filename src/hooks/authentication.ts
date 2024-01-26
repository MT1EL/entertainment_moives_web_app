import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { updateProfile } from "firebase/auth";
import { addUser } from "./user";
import { useToast } from "@chakra-ui/react";
// Register a user
const useRegister = async (email: string, password: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    addUser(user.user.uid);
    return user;
  } catch (error) {
    return console.log(error);
  }
};

const useLogin = (
  email: string,
  password: string,
  handleSucces: any,
  handleErr: any
) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(handleSucces)
    .catch(handleErr);
};

function updateAuthUser(updatedUser: any) {
  const user = auth.currentUser;
  if (user) {
    return updateProfile(user, {
      photoURL: updatedUser.profileImage,
      displayName: updatedUser.username,
    })
      .then((res) => res)
      .catch((error: { message: any }) => {
        console.error("Error updating custom fields:", error.message);
      });
  } else {
    console.error("No user is curently signed in");
  }
}

export { useRegister, useLogin, updateAuthUser };
