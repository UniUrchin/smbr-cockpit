"use client";

import { Animated, Text, aa, aaVisibility } from "@arwes/react";
import { Animator } from "@arwes/react-animator";
import { Box, Flex, Heading, Image, useToken } from "@chakra-ui/react";

export default function AppPage() {
  return (
    <Flex alignItems="center" justifyContent="center" height="100%">
      <Animator>
        <Animated animated={[aaVisibility(), aa("y", -100, 0)]}>
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
                  color: useToken("colors", ["text.primary.500"])[0],
                  fontFamily: "var(--chakra-fonts-monomaniacOne)",
                }}
              >
                SMBR Cockpit is a web application that brings the simplicity and ease of use to
                running SMBR (sumikko-brain), a derivative language of Brain F**k. Let&aposs Dive
                into the world of SMBR programming!
              </Text>
            </Animator>
          </Flex>
        </Animated>
      </Animator>
    </Flex>
  );
}
