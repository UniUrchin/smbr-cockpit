import { createAppTheme } from "@arwes/react";
import { extendTheme } from "@chakra-ui/react";
import { Monomaniac_One, DotGothic16 } from "next/font/google";

const arwesTheme = createAppTheme();

const monomaniacOne = Monomaniac_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monomaniac-one",
});

const dotGothic16 = DotGothic16({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dot-gothic-16",
});

export const theme = extendTheme({
  fonts: {
    monomaniacOne: monomaniacOne.style.fontFamily,
    dotGothic16: dotGothic16.style.fontFamily,
  },
  colors: {
    brand: {
      primary: {
        50: arwesTheme.colors.secondary.main(0),
        100: arwesTheme.colors.secondary.main(1),
        200: arwesTheme.colors.secondary.main(2),
        300: arwesTheme.colors.secondary.main(3),
        400: arwesTheme.colors.secondary.main(4),
        500: arwesTheme.colors.secondary.main(5),
        600: arwesTheme.colors.secondary.main(6),
        700: arwesTheme.colors.secondary.main(7),
        800: arwesTheme.colors.secondary.main(8),
        900: arwesTheme.colors.secondary.main(9),
      },
    },
    text: {
      primary: {
        50: arwesTheme.colors.secondary.text(0),
        100: arwesTheme.colors.secondary.text(1),
        200: arwesTheme.colors.secondary.text(2),
        300: arwesTheme.colors.secondary.text(3),
        400: arwesTheme.colors.secondary.text(4),
        500: arwesTheme.colors.secondary.text(5),
        600: arwesTheme.colors.secondary.text(6),
        700: arwesTheme.colors.secondary.text(7),
        800: arwesTheme.colors.secondary.text(8),
        900: arwesTheme.colors.secondary.text(9),
      },
      secondary: "#FFFFFF",
    },
    accent: {
      success: {
        50: arwesTheme.colors.success.main(0),
        100: arwesTheme.colors.success.main(1),
        200: arwesTheme.colors.success.main(2),
        300: arwesTheme.colors.success.main(3),
        400: arwesTheme.colors.success.main(4),
        500: arwesTheme.colors.success.main(5),
        600: arwesTheme.colors.success.main(6),
        700: arwesTheme.colors.success.main(7),
        800: arwesTheme.colors.success.main(8),
        900: arwesTheme.colors.success.main(9),
      },
      info: {
        50: arwesTheme.colors.info.main(0),
        100: arwesTheme.colors.info.main(1),
        200: arwesTheme.colors.info.main(2),
        300: arwesTheme.colors.info.main(3),
        400: arwesTheme.colors.info.main(4),
        500: arwesTheme.colors.info.main(5),
        600: arwesTheme.colors.info.main(6),
        700: arwesTheme.colors.info.main(7),
        800: arwesTheme.colors.info.main(8),
        900: arwesTheme.colors.info.main(9),
      },
      warning: {
        50: arwesTheme.colors.warning.main(0),
        100: arwesTheme.colors.warning.main(1),
        200: arwesTheme.colors.warning.main(2),
        300: arwesTheme.colors.warning.main(3),
        400: arwesTheme.colors.warning.main(4),
        500: arwesTheme.colors.warning.main(5),
        600: arwesTheme.colors.warning.main(6),
        700: arwesTheme.colors.warning.main(7),
        800: arwesTheme.colors.warning.main(8),
        900: arwesTheme.colors.warning.main(9),
      },
      error: {
        50: arwesTheme.colors.error.main(0),
        100: arwesTheme.colors.error.main(1),
        200: arwesTheme.colors.error.main(2),
        300: arwesTheme.colors.error.main(3),
        400: arwesTheme.colors.error.main(4),
        500: arwesTheme.colors.error.main(5),
        600: arwesTheme.colors.error.main(6),
        700: arwesTheme.colors.error.main(7),
        800: arwesTheme.colors.error.main(8),
        900: arwesTheme.colors.error.main(9),
      },
    },
    background: {
      primary: "#BAEB54",
      secondary: "#FFFFFF",
      transparent: {
        primary: "rgba(186, 235, 84, 0.3)",
        secondary: "rgba(237, 238, 234, 0.3)",
      },
    },
    button: {
      primary: {
        400: "#BAEB54",
        600: "#A2D445",
        700: "#81A935",
      },
    },
  },
});
