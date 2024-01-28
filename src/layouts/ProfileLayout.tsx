import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Text from "../components/typography/";
import Colors from "../Colors.json";
import Custom_Input from "../components/Search/";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { uploadFile } from "../hooks/storage/upload";

function ProfileLayout({ formik, data }: any) {
  const [progress, setProgress] = useState(0);
  const passwordTypes = ["Old password", "New password", "Repeat new password"];
  const fileTypes = ["JPG", "PNG", "GIF"];
  const inputNameTranslator = {
    username: "displayName",
    "Phone Number": "phoneNumber",
    email: "email",
  };

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
    <Grid
      gridTemplateColumns={["1fr", "1fr 1fr"]}
      gap="2rem"
      w="600px"
      maxW="100%"
    >
      {Object.keys(formik.initialValues).map((input) => (
        <GridItem
          key={input}
          gridColumn={[
            "span 1",
            input === "username" ||
            input === "Phone Number" ||
            input === "Old password" ||
            input === "New password"
              ? "span 1"
              : "span 2",
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
              handleBlur={formik.handleBlur}
              placeholder={
                data[
                  inputNameTranslator[
                    input as keyof typeof inputNameTranslator
                  ] as any
                ]
                  ? data[
                      inputNameTranslator[
                        input as keyof typeof inputNameTranslator
                      ]
                    ]
                  : input
              }
              type={passwordTypes.includes(input) ? "password" : "text"}
              disabled={
                input === "email" ||
                (input === "Phone Number" &&
                  data[inputNameTranslator["Phone Number"]])
              }
              error={formik.errors[input]}
              touched={formik.touched[input]}
            />
          )}
        </GridItem>
      ))}
    </Grid>
  );
}

export default ProfileLayout;
