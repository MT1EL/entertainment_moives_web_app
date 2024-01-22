import { Box, Flex } from "@chakra-ui/react";
import { ReactElement } from "react";

function Container({ children }: { children: ReactElement }) {
  return (
    <Flex
      maxW={["100%", "100%", "1600px"]}
      mx="auto"
      paddingInline={["16px", "20px", "36px"]}
      flex={1}
      minH="100vh"
    >
      {children}
    </Flex>
  );
}

export default Container;
