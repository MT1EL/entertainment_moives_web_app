import {
  RecaptchaVerifier,
  User,
  createUserWithEmailAndPassword,
  linkWithPhoneNumber,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../firebase";
import { updateProfile } from "firebase/auth";
import { addUser, getUser } from "./user";
import firebase from "firebase/compat/app";

// Register a user
const useRegister = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateAuthUser({ username });
    addUser(user.user.uid);
    return user;
  } catch (error) {
    return console.log(error);
  }
};

const useLogin = (
  email: string,
  password: string,
  handleSucces: () => void,
  handleErr: () => void
) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(handleSucces)
    .catch(handleErr);
};

const updateAuthUser = async (updatedUser: {
  profileImage: string;
  username: string;
}) => {
  const avatar =
    "https://firebasestorage.googleapis.com/v0/b/entertainment-movies-app.appspot.com/o/profileimage%2Fdefault_avatar.png?alt=media&token=18236645-98e3-4119-a4ed-72df70b50d13";
  const user = auth.currentUser;
  if (user) {
    return await updateProfile(user, {
      photoURL: updatedUser.profileImage ? updatedUser.profileImage : avatar,
      displayName: updatedUser.username,
    })
      .then((res) => auth.currentUser)
      .catch((error: { message: any }) => {
        console.error("Error updating custom fields:", error.message);
      });
  } else {
    console.error("No user is curently signed in");
  }
};

const phoneAuthentication = (phone: string) => {
  auth.languageCode = "ge";
  const phoneWithCountryCode = "+995" + phone;
  const recaptcha = new RecaptchaVerifier(auth, "recaptcha-modal", {
    size: "invisible",
  });
  return linkWithPhoneNumber(
    auth.currentUser as User,
    phoneWithCountryCode,
    recaptcha
  )
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.log(err));
};

export { useRegister, useLogin, updateAuthUser, phoneAuthentication };
