import { TabPanel } from "@chakra-ui/react";
import ProfileInfo from "../../components/shared/ProfileInfo";
import ProfileLayout from "../ProfileLayout";
import Button from "../../components/Button/";
import { useFormik } from "formik";
import { AccountSecurityInitalValues } from "../../formData/initialValues";
import { updateUserPassword } from "../../hooks/user";
import { SecurityValidationSchema } from "../../formData/validationSchemas";
function DetailsTabPanel({ currentUser }: any) {
  const DetailsTabPanelSubmitFunction = (values: { [x: string]: string }) => {
    updateUserPassword(
      currentUser,
      values["Old password"],
      values["New password"]
    )
      .then((res) => res)
      .catch((err) => err);
  };
  const formik = useFormik({
    initialValues: AccountSecurityInitalValues,
    validationSchema: SecurityValidationSchema,
    onSubmit: DetailsTabPanelSubmitFunction,
  });
  return (
    <TabPanel p="0" display={"flex"} flexDir={"column"} gap="0.5rem">
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
