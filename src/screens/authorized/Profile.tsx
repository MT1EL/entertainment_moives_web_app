import { Flex } from "@chakra-ui/react";
import ProfileNavigation from "../../layouts/ProfileNavigation";
function Profile({ currentUser }: { currentUser: any }) {
  return (
    <Flex flexDir={"column"} gap="1rem">
      <ProfileNavigation currentUser={currentUser} />
    </Flex>
  );
}

export default Profile;
