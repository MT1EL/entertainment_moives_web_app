import { Box } from "@chakra-ui/react";
import Text from "./components/typography";
import Search from "./components/Search/index";
import CustomButton from "./components/Button/index";
function App() {
  return (
    <Box
      bg="black"
      padding="40px"
      display={"flex"}
      flexDir={"column"}
      gap="20px"
    >
      <Text size="hl">Whereas recognition of the inherent dignity</Text>

      <CustomButton>Login to tour account</CustomButton>
    </Box>
  );
}

export default App;
