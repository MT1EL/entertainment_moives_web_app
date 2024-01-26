import {
  TabPanel,
  Select,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Switch,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import Button from "../../components/Button/";
import ProfileInfo from "../../components/shared/ProfileInfo";
import Text from "../../components/typography/";
import Colors from "../../Colors.json";
import { auth } from "../../../firebase";
import WarningModal from "../../components/shared/WarningModal";
function PreferencesTabPanel({ currentUser }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <TabPanel gap="1rem" display="flex" flexDir={"column"} maxW="400px" p="0">
      <WarningModal
        isOpen={isOpen}
        onClose={onClose}
        currentUser={currentUser}
      />
      <ProfileInfo currentUser={currentUser} />
      <Flex justifyContent={"space-between"}>
        <Flex gap="0.5rem" flexDir={"column"} w="60%">
          <Text size="hs">Language</Text>
          <Select defaultValue={"GEORGIAN"} maxW="300px" cursor={"pointer"}>
            <option
              value="Georgian"
              style={{ backgroundColor: Colors["Greyish-Blue"] }}
            >
              Georgian
            </option>
            <option
              style={{ backgroundColor: Colors["Greyish-Blue"] }}
              value="English"
            >
              English
            </option>
          </Select>
        </Flex>
        <Flex gap="0.5rem" flexDir={"column"} w="30%">
          <Text size="hs">FontSize</Text>
          <NumberInput defaultValue={16} min={10} max={20}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Flex>
      </Flex>
      <Flex gap="0.5rem" flexDir={"column"}>
        <Text size="hs">Theme</Text>
        <Flex alignItems={"center"} gap="0.5rem">
          <Text size="hxs">Light</Text>
          <Switch size={"lg"} colorScheme={"cyan"} />{" "}
          <Text size="hxs">Dark</Text>
        </Flex>
      </Flex>
      <Divider />
      <Button onClick={() => auth.signOut()}>Log out</Button>
      <Button onClick={onOpen}>Delete Your Account</Button>
    </TabPanel>
  );
}

export default PreferencesTabPanel;
