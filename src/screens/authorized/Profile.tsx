import {
  Box,
  Flex,
  Img,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Button from "../../components/Button/";
import Text from "../../components/typography/";
import Colors from "../../Colors.json";
import { useFormik } from "formik";
import { UserType } from "../../../types";
import ProfileLayout from "../../layouts/ProfileLayout";
import { profileInitialValues } from "../../../initialValues";
import { updateAuthUser } from "../../hooks/authentication";
import { auth } from "../../../firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const formik = useFormik({
    initialValues: profileInitialValues,
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
      // updateUser(updatedObject as UserType);
      updateAuthUser(updatedObject as unknown as UserType);
    },
  });
  useEffect(() => {
    const user = auth.currentUser;
    setCurrentUser(user);
  }, [auth.currentUser]);
  if (!currentUser) {
    return <Spinner size={"xl"} alignSelf={"center"} />;
  }
  return (
    <Box mt="2rem">
      <Flex gap="0.5rem">
        <Box>
          <Img
            src={currentUser.photoURL}
            alt="profileImage"
            borderRadius={"50%"}
            maxW="50px"
            aspectRatio={1 / 1}
            objectFit={"contain"}
          />
        </Box>
        <Box>
          <Text size={"hxxs"}>{currentUser.displayName}</Text>
          <Box as="a">
            <Text size={"bm"} color={Colors["Greyish-Blue"]}>
              {currentUser?.email}
            </Text>
          </Box>
        </Box>
      </Flex>
      <Box maxW="600px">
        <Tabs variant="unstyled" my="1rem">
          <TabList my="1rem">
            <Tab
              borderRadius={"0.5rem"}
              _selected={{ bg: Colors["Greyish-Blue"] }}
            >
              My Info
            </Tab>
            <Tab
              borderRadius={"0.5rem"}
              _selected={{ bg: Colors["Greyish-Blue"] }}
            >
              Settings
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel padding="0px">
              <ProfileLayout
                formik={formik}
                data={currentUser}
                profileImage={currentUser?.photoURL}
                username={currentUser?.displayName}
              />
            </TabPanel>
            <TabPanel padding="0px">
              <Flex gap="1rem">
                <Button onClick={() => currentUser.delete()}>
                  Delete Account
                </Button>
                <Button
                  onClick={() => {
                    auth.signOut(), navigate("/");
                  }}
                >
                  Log out
                </Button>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Button onClick={formik.handleSubmit}>Update Your Profile</Button>
      </Box>
    </Box>
  );
}

export default Profile;
