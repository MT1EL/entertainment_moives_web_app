import { Flex } from "@chakra-ui/react";
import { useFormik } from "formik";
import { UserType } from "../../../types";
import { AccountDetailsInitialValues } from "../../../initialValues";
import { updateAuthUser } from "../../hooks/authentication";
import ProfileNavigation from "../../layouts/ProfileNavigation";
function Profile({ currentUser }: { currentUser: any }) {
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
  return (
    <Flex flexDir={"column"} gap="1rem">
      <ProfileNavigation formik={formik} currentUser={currentUser} />
    </Flex>
  );
}

export default Profile;
