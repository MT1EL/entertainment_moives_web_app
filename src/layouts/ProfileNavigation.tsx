import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import Colors from "../Colors.json";
import PreferencesTabPanel from "./TabPanels/PreferencesTabPanel";
import DetailsTabPanel from "./TabPanels/DetailsTabPanel";
import SecurityTabPanel from "./TabPanels/SecurityTabPanel";
import { useTranslation } from "react-i18next";
function ProfileNavigation({ formik, currentUser }: any) {
  const { t } = useTranslation();
  const links = ["Account Details", "Account Security", "Preferences"];

  return (
    <Tabs variant={"unstyled"} w="fit-content" maxW="100%">
      <TabList
        display={"flex"}
        borderBottom={`1px solid ${Colors["Greyish-Blue"]}`}
        pt=".5rem"
        gap="1rem"
        justifyContent={"space-between"}
        minW={"fit-content"}
      >
        {links.map((link) => (
          <Tab
            justifyContent={"start"}
            px="0"
            color={Colors["Greyish-Blue"]}
            _selected={{ color: "#FFF" }}
            fontSize={["0.8rem", "1rem", "1.2rem"]}
            key={link}
          >
            {t(link)}
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
