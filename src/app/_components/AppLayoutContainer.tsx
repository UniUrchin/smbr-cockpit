"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Flex } from "@chakra-ui/react";

import { MovingBackground } from "@/components/MovingBackground";
import { theme } from "@/styles/theme";

export const AppLayoutContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Flex direction="column" height="100vh">
          <MovingBackground />
          {children}
        </Flex>
      </ChakraProvider>
    </CacheProvider>
  );
};
