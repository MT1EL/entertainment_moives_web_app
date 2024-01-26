import { Flex, Spinner } from "@chakra-ui/react";
import { useFormik } from "formik";
import { UserType } from "../../../types";
import { AccountDetailsInitialValues } from "../../../initialValues";
import { updateAuthUser } from "../../hooks/authentication";
import { auth } from "../../../firebase";
import { useEffect, useState } from "react";
import ProfileNavigation from "../../layouts/ProfileNavigation";
function Profile() {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const formik = useFormik({
    initialValues: AccountDetailsInitialValues,
    onSubmit: (values) => {
      const updatedObject = {
        phoneNumber:
          values.phoneNumber !== ""
            ? values.phoneNumber
            : currentUser?.phoneNumber,
        username:
          values.displayName !== ""
            ? values.displayName
            : currentUser?.displayName,
        profileImage:
          values.profileImage !== ""
            ? values.profileImage
            : currentUser?.photoURL,
      };
      updateAuthUser(updatedObject as unknown as UserType);
    },
  });
  useEffect(() => {
    const user = auth.currentUser;
    setCurrentUser(user);
  }, [auth.currentUser]);
  if (!currentUser) {
    return <Spinner size={"xl"} alignSelf={"center"} />;
  }
  return (
    <Flex flexDir={"column"} gap="1rem">
      <ProfileNavigation formik={formik} currentUser={currentUser} />
    </Flex>
  );
}

export default Profile;
