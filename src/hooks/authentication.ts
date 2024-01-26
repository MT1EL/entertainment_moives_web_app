import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePhoneNumber,
} from "firebase/auth";
import { auth } from "../../firebase";
import { UserType } from "../../types";
import { updateProfile } from "firebase/auth";
// Register a user
const useRegister = async (email: string, password: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
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
  signInWithEmailAndPassword(auth, email, password)
    .then(handleSucces)
    .catch(handleErr);
};

function updateAuthUser(updatedUser: any) {
  const user = auth.currentUser;
  if (user) {
    updateProfile(user, {
      photoURL: updatedUser.profileImage,
      displayName: updatedUser.username,
    })
      .then(() => {
        console.log("Custom fields updated successfully!");
      })
      .catch((error: { message: any }) => {
        console.error("Error updating custom fields:", error.message);
      });
  } else {
    console.error("No user is curently signed in");
  }
}

export { useRegister, useLogin, updateAuthUser };
