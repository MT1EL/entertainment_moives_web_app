import { TabPanel, useDisclosure, useToast } from "@chakra-ui/react";
import ProfileInfo from "../../components/shared/ProfileInfo";
import ProfileLayout from "../ProfileLayout";
import Button from "../../components/Button/";
import { useFormik } from "formik";
import { AccountDetailsInitialValues } from "../../formData/initialValues";
import { updateAuthUser } from "../../hooks/authentication";
import PhoneLinkModal from "../../components/shared/PhoneLinkModal";
import { useTranslation } from "react-i18next";
import { useState } from "react";
function DetailsTabPanel({ currentUser }: any) {
  const toast = useToast();
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updatedUser, setUpdatedUser] = useState<any>();
  const DetailsPanelSubmitFunction = async (values: {
    "Phone Number": string;
    username: string;
    profileImage: string;
  }) => {
    try {
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
      const res = await updateAuthUser(updatedObject);
      toast({
        title: t("Profile updated successfully"),
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setUpdatedUser(res); // Update updatedUser state after successful update
    } catch (err) {
      toast({
        title: t("Profile update failed"),
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  // DETAILS FORMIK
  const formik = useFormik({
    initialValues: AccountDetailsInitialValues,
    onSubmit: DetailsPanelSubmitFunction,
  });

  return (
    <TabPanel gap="1rem" display="flex" flexDir={"column"} p="0">
      <PhoneLinkModal isOpen={isOpen} onClose={onClose} />
      <ProfileInfo currentUser={updatedUser ? updatedUser : currentUser} />

      <ProfileLayout
        formik={formik}
        data={updatedUser ? updatedUser : currentUser}
      />
      {!currentUser.phoneNumber && (
        <Button onClick={onOpen}>Change phone number</Button>
      )}
      <Button onClick={formik.handleSubmit}>Update Your Profile</Button>
    </TabPanel>
  );
}

export default DetailsTabPanel;
