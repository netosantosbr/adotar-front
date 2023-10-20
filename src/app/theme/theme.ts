import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";

export default extendTheme({ defaultColorTheme: "system" }, globalStyles);
