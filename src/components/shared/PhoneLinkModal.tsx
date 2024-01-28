import {
  Box,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
  Input,
} from "@chakra-ui/react";
import Button from "../Button/";
import Text from "../typography";
import Colors from "../../Colors.json";
import { useState } from "react";
import { phoneAuthentication } from "../../hooks/authentication";
import firebase from "firebase/compat/app";
const PhoneLinkModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [user, setUser] = useState<firebase.User | string>("");
  const [page, setPage] = useState<number>(1);
  const [phone, setPhone] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const handlePageChange = () => {
    if (page === 2) {
      confirmOTP();
      //   onClose();
    } else {
      console.log(phone);
      phoneAuthentication(phone)
        .then((res) => {
          console.log(res);
          setUser(res);
          setPage(page + 1);
        })
        .catch((err) => console.log(err));

      setPage(page + 1);
    }
  };

  const confirmOTP = () => {
    console.log("Confirming");
    user.confirm(code);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg={Colors["Semi-Dark-Blue"]}>
        <ModalHeader>
          <Text size={"hxs"}>{page === 1 ? "Phone number" : "Check code"}</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {page === 1 ? (
            <>
              <Input
                type="tel"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </>
          ) : (
            <HStack>
              <PinInput otp value={code} onChange={(value) => setCode(value)}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          )}
          <Box id="recaptcha-modal" />
        </ModalBody>

        <ModalFooter gap="1rem">
          <Box>
            <Button bg={Colors["Greyish-Blue"]} onClick={onClose}>
              {page === 1 ? "Cancel" : "Go back"}
            </Button>
          </Box>
          <Box>
            <Button onClick={handlePageChange}>
              {page === 1 ? "Send code" : "Submit"}
            </Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PhoneLinkModal;
