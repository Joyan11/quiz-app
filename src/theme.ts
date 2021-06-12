import { extendTheme } from "@chakra-ui/react";
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    gradient: {
      transperent: "rgba(0, 0, 0, 0.7)",
    },
  },
});
