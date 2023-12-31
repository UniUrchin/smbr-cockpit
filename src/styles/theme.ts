import { extendTheme } from "@chakra-ui/react";
import { Noto_Sans_JP } from "next/font/google";

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const theme = extendTheme({
  fonts: {
    heading: NotoSansJP,
    body: NotoSansJP,
  },
});
