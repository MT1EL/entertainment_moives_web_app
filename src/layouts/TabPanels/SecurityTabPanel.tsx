import { TabPanel } from "@chakra-ui/react";
import ProfileInfo from "../../components/shared/ProfileInfo";
import ProfileLayout from "../ProfileLayout";
import Button from "../../components/Button/";
import { useFormik } from "formik";
import { AccountSecuiryInitialValues } from "../../../initialValues";
function DetailsTabPanel({ currentUser }: any) {
  const formik = useFormik({
    initialValues: AccountSecuiryInitialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(currentUser);
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
