"use client";

import { Animated, Text, aa, aaVisibility } from "@arwes/react";
import { Animator } from "@arwes/react-animator";
import { Box, Flex, Heading, Image, useToken } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSound } from "use-sound";

import { MovingButton } from "@/components/MovingButton";

export default function AppPage() {
  const router = useRouter();

  const [playOpenMenuSound] = useSound("/sounds/open-menu.mp3");
  const [playButtonClickSound] = useSound("/sounds/button-click.mp3");

  useEffect(() => {
    let tid = setTimeout(() => playOpenMenuSound(), 500);
    return () => clearTimeout(tid);
  }, [playOpenMenuSound]);

  return (
    <Flex alignItems="center" justifyContent="center" height="100%">
      <Animator manager="stagger" duration={{ stagger: 0.2 }}>
        <Animated animated={[aaVisibility(), aa("y", -24, 0)]}>
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap="32px"
            width="400px"
            padding="32px"
            backgroundColor="background.transparent.secondary"
          >
            <Flex alignItems="center" justifyContent="center" flexDirection="column">
              <Animator>
                <Animated animated={[aaVisibility(), aa("y", -24, 0)]}>
                  <Box width="120px">
                    <Image alt="SMBR Cockpit's logo image" src="/images/smbr-cockpit-logo.svg" />
                  </Box>
                </Animated>
                <Animated animated={[aaVisibility(), aa("y", -24, 0)]}>
                  <Heading color="brand.primary.400" fontFamily="monomaniacOne" fontSize="48px">
                    SMBR Cockpit
                  </Heading>
                </Animated>
              </Animator>
            </Flex>
            <Animator>
              <Text
                style={{
                  color: useToken("colors", ["text.primary.800"])[0],
                  fontFamily: "var(--chakra-fonts-monomaniacOne)",
                  textAlign: "center",
                }}
              >
                SMBR Cockpit is a web application that brings the simplicity and ease of use to
                running SMBR (sumikko-brain), a derivative language of Brain F**k. Let&apos;s Dive
                into the world of SMBR programming!
              </Text>
            </Animator>
            <Animator>
              <Animated animated={[aaVisibility(), aa("y", -24, 0)]}>
                <MovingButton
                  width="148px"
                  height="48px"
                  onClick={() => {
                    playButtonClickSound();
                    router.push("/playground");
                  }}
                  withicon={+true}
                />
              </Animated>
            </Animator>
          </Flex>
        </Animated>
      </Animator>
    </Flex>
  );
}
