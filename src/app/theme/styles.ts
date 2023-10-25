import { mode } from "@chakra-ui/theme-tools";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};

export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
    navy: {
      50: "#d0dcfb",
      100: "#aac0fe",
      200: "#a3b9f8",
      300: "#728fea",
      400: "#3652ba",
      500: "#1b3bbb",
      600: "#24388a",
      700: "#1b254b",
      800: "#111c44",
      900: "#0b1437",
    },
  },
  styles: {
    // @ts-ignore
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("gray.50", "#1B254B")(props),
        fontFamily: "Helvetica, sans-serif",
      },
      html: {
        fontFamily: "Helvetica, sans-serif",
      },
    }),
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "gray.50",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
              _dark: {
                backgroundColor: "#1B254B", // Set the dark mode background color for the label
              },
            },
          },
        },
      },
    },
  },
};
