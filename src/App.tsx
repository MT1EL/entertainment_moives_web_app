import { Box, Text } from "@chakra-ui/react";
import CustomText from "./components/typography/CustomText";
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
      <CustomText size="hl">
        Whereas recognition of the inherent dignity
      </CustomText>

      <CustomButton>Login to tour account</CustomButton>
    </Box>
  );
}

export default App;
