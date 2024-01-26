import { TabPanel, useToast } from "@chakra-ui/react";
import ProfileInfo from "../../components/shared/ProfileInfo";
import ProfileLayout from "../ProfileLayout";
import Button from "../../components/Button/";
import { useFormik } from "formik";
import { AccountSecurityInitalValues } from "../../../initialValues";
import { updateUserPassword } from "../../hooks/user";
import { showToast } from "../../components/shared/Toast";
function DetailsTabPanel({ currentUser }: any) {
  const toast = useToast();
  const formik = useFormik({
    initialValues: AccountSecurityInitalValues,
    onSubmit: (values) => {
      if (values["NEW PASSWORD"] === values["REPEAT NEW PASSWORD"]) {
        updateUserPassword(
          currentUser,
          values["OLD PASSWORD"],
          values["NEW PASSWORD"]
        )
          .then((res) => showToast("Account updates successfully", "success"))
          .catch((err) => showToast("Error occured", "error"));
      } else {
        formik.setErrors({ "REPEAT NEW PASSWORD": "passwords should match" });
      }
    },
  });

  return (
    <TabPanel
      p="0"
      maxW="600px"
      display={"flex"}
      flexDir={"column"}
      gap="0.5rem"
    >
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
