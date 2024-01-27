import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Button from "../Button/";
import Text from "../typography";
import Colors from "../../Colors.json";
import { useTranslation } from "react-i18next";
const WarningModal = ({ isOpen, onClose, handleDelete }: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={Colors["Semi-Dark-Blue"]}>
        <ModalHeader>
          <Text size={"hxs"} color={Colors["red"]}>
            ⚠️ Warning: Deleting your account is irreversible!
          </Text>
        </ModalHeader>
        <ModalCloseButton bg="#FFF" />
        <ModalBody>
          <Text size="hxs">
            Are you sure you want to proceed? This action will permanently
            delete your account, along with all associated data and content. You
            will lose access to your profile, settings, and any linked
            information. Please be absolutely certain before confirming this
            action. If you have any concerns or need assistance, contact our
            support team before proceeding.
          </Text>
        </ModalBody>

        <ModalFooter gap="1rem">
          <Box>
            <Button bg={Colors["Greyish-Blue"]} onClick={onClose}>
              Cancel
            </Button>
          </Box>

          <Box>
            <Button onClick={handleDelete}>DELETE ACCOUNT</Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WarningModal;
