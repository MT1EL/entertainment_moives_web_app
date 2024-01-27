import { TabPanel } from "@chakra-ui/react";
import ProfileInfo from "../../components/shared/ProfileInfo";
import ProfileLayout from "../ProfileLayout";
import Button from "../../components/Button/";
import { useFormik } from "formik";
import { AccountDetailsInitialValues } from "../../../initialValues";
import { updateAuthUser } from "../../hooks/authentication";
import { UserType } from "../../../types";
function DetailsTabPanel({ currentUser }: any) {
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
      updateAuthUser(updatedObject as unknown as UserType)
        ?.then((res) => res)
        .catch((err) => res);
    },
  });

  return (
    <TabPanel gap="1rem" display="flex" flexDir={"column"} p="0">
      <ProfileInfo currentUser={currentUser} />

      <ProfileLayout
        formik={formik}
        data={currentUser}
        profileImage={currentUser?.photoURL}
        username={currentUser?.displayName}
      />
      <Button onClick={formik.handleSubmit}>Update Your Profile</Button>
    </TabPanel>
  );
}

export default DetailsTabPanel;
