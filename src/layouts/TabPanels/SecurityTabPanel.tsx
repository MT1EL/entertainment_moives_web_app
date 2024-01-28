import { TabPanel, useToast } from "@chakra-ui/react";
import ProfileInfo from "../../components/shared/ProfileInfo";
import ProfileLayout from "../ProfileLayout";
import Button from "../../components/Button/";
import { useFormik } from "formik";
import { AccountSecurityInitalValues } from "../../formData/initialValues";
import { updateUserPassword } from "../../hooks/user";
import { SecurityValidationSchema } from "../../formData/validationSchemas";
import { useTranslation } from "react-i18next";
function DetailsTabPanel({ currentUser }: any) {
  const { t } = useTranslation();
  const toast = useToast();
  const DetailsTabPanelSubmitFunction = (values: { [x: string]: string }) => {
    updateUserPassword(
      currentUser,
      values["Old password"],
      values["New password"]
    )
      ?.then(() =>
        toast({
          title: t("Profile updated successfully"),
          status: "success",
          duration: 5000,
          isClosable: true,
        })
      )
      .catch(() =>
        toast({
          title: t("Profile update failed"),
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      );
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
