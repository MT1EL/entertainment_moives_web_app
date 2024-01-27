import { Button } from "@chakra-ui/react";
import Colors from "../../Colors.json";
import { useTranslation } from "react-i18next";
type buttonType = { children: string; onClick: any; bg?: string };
function index({ children, onClick, bg }: buttonType) {
  const { t } = useTranslation();

  return (
    <Button
      w="100%"
      borderRadius={"6px"}
      bg={bg ? bg : Colors["red"]}
      color={Colors["Pure-White"]}
      _hover={{ bg: Colors["Pure-White"], color: Colors["Semi-Dark-Blue"] }}
      fontFamily={"'Outfit', sans-serif"}
      fontSize={"15px"}
      fontWeight={"300"}
      onClick={onClick}
    >
      {t(children)}
    </Button>
  );
}

export default index;
