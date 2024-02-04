"use client";

import { Animated, Text, aa, aaOpacity, aaVisibility } from "@arwes/react";
import { Animator } from "@arwes/react-animator";
import { Dots, MovingLines } from "@arwes/react-bgs";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Flex, useToken } from "@chakra-ui/react";
import { useState } from "react";
import { useSound } from "use-sound";

import { MovingButton } from "@/components/MovingButton";
import { theme } from "@/styles/theme";

export const AppLayoutContainer = ({ children }: { children: React.ReactNode }) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [playButtonClickSound] = useSound("/sounds/button-click.mp3");

  const AgreementCard = () => {
    return (
      <Animator manager="stagger" duration={{ stagger: 0.2 }}>
        <Animated animated={[aaOpacity()]}>
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap="16px"
            width="360px"
            padding="32px"
            backgroundColor="background.transparent.secondary"
          >
            <Animator>
              <Text
                style={{
                  color: useToken("colors", ["text.primary.700"])[0],
                  fontFamily: "var(--chakra-fonts-monomaniacOne)",
                  textAlign: "center",
                }}
              >
                SMBR Cockpit uses sounds.
                <br />
                Please press &apos;Agree&apos; if that&apos;s okay.
              </Text>
            </Animator>
            <MovingButton
              width="120px"
              height="48px"
              onClick={() => {
                playButtonClickSound();
                setIsAgreed(true);
              }}
            >
              Agree
            </MovingButton>
          </Flex>
        </Animated>
      </Animator>
    );
  };

  const MovingBackground = () => {
    return (
      <Animator active={isAgreed} duration={{ enter: 2.5 }}>
        <Dots
          color={useToken("colors", ["background.transparent.primary"])[0]}
          type="circle"
          size={2}
        />
        <MovingLines
          lineColor={useToken("colors", ["brand.primary.200"])[0]}
          lineWidth={0.4}
          sets={4}
        />
      </Animator>
    );
  };

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Flex direction="column" height="100vh">
          <MovingBackground />
          {isAgreed ? (
            <>{children}</>
          ) : (
            <Flex alignItems="center" justifyContent="center" height="100%">
              <AgreementCard />
            </Flex>
          )}
        </Flex>
      </ChakraProvider>
    </CacheProvider>
  );
};
