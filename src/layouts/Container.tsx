import { Box, Flex } from "@chakra-ui/react";
import { ReactElement } from "react";

function Container({ children }: { children: ReactElement[] }) {
  return (
    <Flex
      maxW={["100%", "100%", "1600px"]}
      mx="auto"
      paddingInline={["1rem", "1.5rem", "0px"]}
      paddingRight={["1rem", "1.5rem", "2rem"]}
      flex={1}
      minH="100vh"
      paddingBlock={["1.5rem", ".5rem", "2rem"]}
      flexDir={"column"}
      w="100%"
    >
      {children}
    </Flex>
  );
}

export default Container;
