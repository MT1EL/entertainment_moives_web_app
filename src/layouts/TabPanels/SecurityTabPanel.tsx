import { TabPanel } from "@chakra-ui/react";
import ProfileInfo from "../../components/shared/ProfileInfo";
import ProfileLayout from "../ProfileLayout";
import Button from "../../components/Button/";
import { useFormik } from "formik";
import { AccountSecurityInitalValues } from "../../../initialValues";
import { updateUserPassword } from "../../hooks/user";
function DetailsTabPanel({ currentUser }: any) {
  const formik = useFormik({
    initialValues: AccountSecurityInitalValues,
    onSubmit: (values) => {
      if (values["NEW PASSWORD"] === values["REPEAT NEW PASSWORD"]) {
        updateUserPassword(
          currentUser,
          values["OLD PASSWORD"],
          values["NEW PASSWORD"]
        )
          .then((res) => res)
          .catch((err) => err);
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
