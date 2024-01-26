import { useToast } from "@chakra-ui/react";

const toast = useToast();

export const showToast = (
  title: string,
  status: "success" | "info" | "warning" | "error" | "loading" | undefined
) => {
  toast({
    title: title,
    status: status,
    duration: 3000,
    isClosable: true,
  });
};
