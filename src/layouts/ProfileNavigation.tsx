import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import Colors from "../Colors.json";
import PreferencesTabPanel from "./TabPanels/PreferencesTabPanel";
import DetailsTabPanel from "./TabPanels/DetailsTabPanel";
import SecurityTabPanel from "./TabPanels/SecurityTabPanel";
function ProfileNavigation({ formik, currentUser }: any) {
  const links = ["Account Details", "Account Security", "Preferences"];

  return (
    <Tabs variant={"unstyled"} maxW="600px">
      <TabList
        display={"flex"}
        borderBottom={`1px solid ${Colors["Greyish-Blue"]}`}
        pt=".5rem"
        gap="1rem"
        justifyContent={"space-between"}
      >
        {links.map((link) => (
          <Tab
            justifyContent={"start"}
            px="0"
            color={Colors["Greyish-Blue"]}
            _selected={{ color: "#FFF" }}
            fontSize={["1rem", "1.3rem"]}
            key={link}
          >
            {link}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        <DetailsTabPanel formik={formik} currentUser={currentUser} />
        <SecurityTabPanel formik={formik} currentUser={currentUser} />
        <PreferencesTabPanel currentUser={currentUser} />
      </TabPanels>
    </Tabs>
  );
}

export default ProfileNavigation;
