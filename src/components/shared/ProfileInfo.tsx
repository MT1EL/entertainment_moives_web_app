import { Box, Flex, Img } from "@chakra-ui/react";
import Text from "../typography/";
import Colors from "../../Colors.json";
import { UserType } from "../../../types";

function ProfileInfo({ currentUser }: any) {
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
    </Box>
  );
}

export default ProfileInfo;
