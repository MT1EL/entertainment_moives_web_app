import {
  TabPanel,
  Select,
  Flex,
  Divider,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Button from "../../components/Button/";
import ProfileInfo from "../../components/shared/ProfileInfo";
import Text from "../../components/typography/";
import Colors from "../../Colors.json";
import { auth } from "../../../firebase";
import WarningModal from "../../components/shared/WarningModal";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../hooks/user";
import i18n from "../../../i18next";
import { useTranslation } from "react-i18next";
function PreferencesTabPanel({ currentUser }: any) {
  const { t } = useTranslation();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const handleDelete = () => {
    auth.currentUser?.delete();
    deleteUser(currentUser?.uid);
    navigate("/");
  };

  return (
    <TabPanel
      gap="1rem"
      display="flex"
      flexDir={"column"}
      p="0"
      w="600px"
      maxW={"100%"}
    >
      <WarningModal
        isOpen={isOpen}
        onClose={onClose}
        currentUser={currentUser}
        handleDelete={handleDelete}
      />
      <ProfileInfo currentUser={currentUser} />
      <Flex justifyContent={"space-between"}>
        <Flex gap="0.5rem" flexDir={"column"} w="55%">
          <Text size="hs">Language</Text>
          <Select
            defaultValue={i18n.language}
            maxW="300px"
            cursor={"pointer"}
            onChange={(e) => {
              i18n.changeLanguage(e.target.value),
                localStorage.setItem("i18nextLng", e.target.value);
            }}
          >
            <option
              value="ge"
              style={{ backgroundColor: Colors["Greyish-Blue"] }}
            >
              ქართული
            </option>
            <option
              style={{ backgroundColor: Colors["Greyish-Blue"] }}
              value="en"
            >
              English
            </option>
          </Select>
        </Flex>
      </Flex>
      <Divider />
      <Button
        onClick={() => {
          auth.signOut();
          navigate("/");
          toast({
            title: t("თქვენ გამოხვედით ექაუნთიდან"),
            status: "info",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }}
      >
        Log out
      </Button>
      <Button onClick={onOpen}>Delete Your Account</Button>
    </TabPanel>
  );
}

export default PreferencesTabPanel;
function navigate(arg0: string) {
  throw new Error("Function not implemented.");
}
