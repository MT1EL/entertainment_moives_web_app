import { Flex } from "@chakra-ui/react";
import { ReactElement } from "react";

function Container({ children }: { children: ReactElement[] }) {
  return (
    <Flex
      mx="auto"
      paddingInline={["1rem", "1.5rem", "0px"]}
      paddingRight={["1rem", "1.5rem", "2rem"]}
      flex={1}
      minH="100vh"
      paddingBlock={["1.5rem", ".5rem", "2rem"]}
      flexDir={"column"}
      maxW="1600px"
      overflow={"hidden"}
      w="100%"
    >
      {children}
    </Flex>
  );
}

export default Container;
