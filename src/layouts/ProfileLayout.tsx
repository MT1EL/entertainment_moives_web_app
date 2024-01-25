import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Text from "../components/typography/";
import Colors from "../Colors.json";
import Custom_Input from "../components/Search/";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { uploadFile } from "../hooks/storage/upload";
function ProfileLayout({ formik, data }: any) {
  const [progress, setProgress] = useState(0);

  const fileTypes = ["JPG", "PNG", "GIF"];

  const handleFileDrop = async (file: { type: any }) => {
    if (file && file.type) {
      // Your code to handle the file
      await uploadFile(
        file,
        (progress) => {
          // Update the state to reflect the current upload progress
          setProgress(progress);
        },
        (downloadUrl) => {
          formik.setFieldValue("profileImage", downloadUrl);
        }
      );
    } else {
      console.error("Invalid file object");
    }
  };

  return (
    <Grid gridTemplateColumns={["1fr", "1fr 1fr"]} gap="2rem" maxW="600px">
      {Object.keys(formik.initialValues).map((input) => (
        <GridItem
          key={input}
          gridColumn={[
            "span 2",
            input === "name" || input === "surname" ? "" : "span 2",
          ]}
        >
          {input === "profileImage" ? (
            <Flex flexDir={"column"} gap="1rem">
              <FileUploader
                handleChange={handleFileDrop}
                name="profileImage"
                types={fileTypes}
              >
                <Flex
                  border={`1px dashed ${Colors["Greyish-Blue"]}`}
                  h="70px"
                  borderRadius={"0.5rem"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  cursor={"pointer"}
                >
                  <Text size={"hxs"}>
                    Upload or Drop your Profile Picture Here
                  </Text>
                </Flex>
              </FileUploader>
              <Flex display={progress === 0 ? "none" : "flex"}>
                <Box
                  w={`${progress}%`}
                  position={"relative"}
                  borderRadius={"1rem"}
                  overflow={"hidden"}
                  bg="red"
                  transition={"all 300ms ease"}
                />
                <Flex>
                  <Text size="bm">{Math.round(progress)}</Text>
                  <Text size="bm">%</Text>
                </Flex>
              </Flex>
            </Flex>
          ) : (
            <Custom_Input
              name={input}
              setFunction={formik.handleChange}
              handleBlur={() => formik.handleBlur}
              placeholder={data[input] ? data[input] : input}
            />
          )}
        </GridItem>
      ))}
    </Grid>
  );
}

export default ProfileLayout;
