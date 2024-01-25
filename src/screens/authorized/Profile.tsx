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
import { useQuery } from "react-query";
import { getUser, updateUser } from "../../hooks/user";
import { UserType } from "../../../types";
import ProfileLayout from "../../layouts/ProfileLayout";
import { profileInitialValues } from "../../../initialValues";
import { useState } from "react";
// import Tab from "../../components/shared/Tab/";
function Profile() {
  const [page, setPage] = useState("My Info");
  const { data } = useQuery<UserType>("USER", getUser);
  const formik = useFormik({
    initialValues: profileInitialValues,
    onSubmit: (values) => {
      const updatedObject = {
        name: values.name !== "" ? values.name : data?.name,
        surname: values.surname !== "" ? values.surname : data?.surname,
        username: values.username !== "" ? values.username : data?.username,
        email: values.email !== "" ? values.email : data?.email,
        profileImage:
          values.profileImage !== "" ? values.profileImage : data?.profileImage,
      };
      updateUser(updatedObject as UserType);
    },
  });

  if (!data) {
    return <Spinner size={"xl"} alignSelf={"center"} />;
  }
  return (
    <Box mt="2rem">
      <Flex gap="0.5rem">
        <Box>
          <Img
            src={data.profileImage}
            alt="profileImage"
            borderRadius={"50%"}
            maxW="50px"
            aspectRatio={1 / 1}
            objectFit={"contain"}
          />
        </Box>
        <Box>
          <Text size={"hxxs"}>{data.fullName}</Text>
          <Box as="a">
            <Text size={"bm"} color={Colors["Greyish-Blue"]}>
              {data.email}
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
              <ProfileLayout formik={formik} data={data} />
            </TabPanel>
            <TabPanel padding="0px">
              <h1>Setting</h1>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Button onClick={formik.handleSubmit}>Update Your Profile</Button>
      </Box>
    </Box>
  );
}

export default Profile;
