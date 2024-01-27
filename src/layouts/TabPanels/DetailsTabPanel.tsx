import { TabPanel } from "@chakra-ui/react";
import ProfileInfo from "../../components/shared/ProfileInfo";
import ProfileLayout from "../ProfileLayout";
import Button from "../../components/Button/";
import { useFormik } from "formik";
import { AccountDetailsInitialValues } from "../../formData/initialValues";
import { updateAuthUser } from "../../hooks/authentication";
import { UserType } from "../../../types";
function DetailsTabPanel({ currentUser }: any) {
  const DetailsPanelSubmitFunction = (values: {
    "Phone Number": string;
    username: string;
    profileImage: string;
  }) => {
    const updatedObject = {
      phoneNumber:
        values["Phone Number"] !== ""
          ? values["Phone Number"]
          : currentUser?.phoneNumber,
      username:
        values.username !== "" ? values.username : currentUser?.displayName,
      profileImage:
        values.profileImage !== ""
          ? values.profileImage
          : currentUser?.photoURL,
    };
    updateAuthUser(updatedObject as unknown as UserType)
      ?.then((res) => res)
      .catch((err) => err);
  };
  // DETAILS FORMIK
  const formik = useFormik({
    initialValues: AccountDetailsInitialValues,
    onSubmit: DetailsPanelSubmitFunction,
  });

  return (
    <TabPanel gap="1rem" display="flex" flexDir={"column"} p="0">
      <ProfileInfo currentUser={currentUser} />

      <ProfileLayout formik={formik} data={currentUser} />
      <Button onClick={formik.handleSubmit}>Update Your Profile</Button>
    </TabPanel>
  );
}

export default DetailsTabPanel;
