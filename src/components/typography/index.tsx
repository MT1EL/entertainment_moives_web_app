import { Text } from "@chakra-ui/react";
import Colors from "../../Colors.json";
import { useTranslation } from "react-i18next";
import { TextType } from "../../../types";

function index({ children, size, color }: TextType) {
  const { t } = useTranslation();
  const textStyles = {
    hl: { fontSize: "2em", fontWeight: "300" },
    hm: { fontSize: "1.5em", fontWeight: "300" },
    hs: { fontSize: "1.5em", fontWeight: "500" },
    hxs: { fontSize: "1.125em", fontWeight: "500" },
    hxxs: { fontSize: ["0.875em", "1.125em"], fontWeight: "500" },
    bm: { fontSize: "15px", fontWeight: "300" },
    bs: { fontSize: "13px", fontWeight: "300", opacity: "0.75" },
  };
  return (
    <Text
      color={color ? color : Colors["Pure-White"]}
      fontFamily={"'Outfit', sans-serif"}
      fontSize={textStyles[size]?.fontSize}
      fontWeight={textStyles[size]?.fontWeight}
      lineHeight={"normal"}
      letterSpacing={"-0.5px"}
      fontStyle={"normal"}
      opacity={size === "bs" ? textStyles[size]?.opacity : "1"}
    >
      {t(children as string)}
    </Text>
  );
}

export default index;
