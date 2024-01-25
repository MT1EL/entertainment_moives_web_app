import { Text } from "@chakra-ui/react";
import Colors from "../../Colors.json";
type TextStyles = {
  hl: { fontSize: string; fontWeight: string };
  hm: { fontSize: string; fontWeight: string };
  hs: { fontSize: string; fontWeight: string };
  hxs: { fontSize: string; fontWeight: string };
  hxxs: { fontSize: string; fontWeight: string };
  bm: { fontSize: string; fontWeight: string };
  bs: { fontSize: string; fontWeight: string; opacity?: string };
};
function index({
  children,
  size,
  color,
}: {
  children: string | number;
  size: keyof TextStyles;
  color?: string;
}) {
  const textStyles = {
    hl: { fontSize: "2rem", fontWeight: "300" },
    hm: { fontSize: "1.5rem", fontWeight: "300" },
    hs: { fontSize: "1.5rem", fontWeight: "500" },
    hxs: { fontSize: "1.125rem", fontWeight: "500" },
    hxxs: { fontSize: ["0.875rem", "1.125rem"], fontWeight: "500" },
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
      {children}
    </Text>
  );
}

export default index;
