"use client";

import { Animated, Animator, aa, aaOpacity } from "@arwes/react";
import { Flex, Heading, Text, Textarea } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSound } from "use-sound";

import { CockpitPanel } from "@/components/CockpitPanel";
import { RunButton } from "@/components/RunButton";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { useSmbr } from "@/hooks/useSmbr";

export default function PlaygroundPage() {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const [playOpenMenuSound] = useSound("/sounds/open-menu.mp3");
  const [playButtonClickSound] = useSound("/sounds/button-click.mp3");

  const { execute } = useSmbr();

  useEffect(() => {
    let tid = setTimeout(() => playOpenMenuSound(), 100);
    return () => clearTimeout(tid);
  }, [playOpenMenuSound]);

  return (
    <Flex alignItems="center" flexDirection="column" height="100vh">
      <Animator manager="parallel" duration={{ stagger: 0.2 }}>
        <Animated animated={[aaOpacity(), aa("y", -24, 0)]}>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
            width="100vw"
            height="64px"
            padding="0px 32px"
            backgroundColor="brand.primary.400"
          >
            <Link href="/">
              <Heading
                color="text.secondary"
                fontFamily="monomaniacOne"
                fontSize="32px"
                fontWeight="normal"
              >
                SMBR Cockpit
              </Heading>
            </Link>
            <Flex alignItems="center" flexDirection="row" gap="24px" height="32px">
              <Link href="https://twitter.com">
                <TwitterIcon as="a" boxSize="36px" />
              </Link>
              <Link href="https://github.com/UniUrchin/smbr-cockpit">
                <GithubIcon boxSize="32px" />
              </Link>
            </Flex>
          </Flex>
        </Animated>
        <Animated animated={[aaOpacity(), aa("y", 24, 0)]} style={{ flex: 1, width: "100%" }}>
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            gap="64px"
            height="100%"
            padding="0 40px"
          >
            <Flex
              position="relative"
              justifyContent="center"
              flexDirection="column"
              gap="32px"
              width="100%"
            >
              <RunButton
                aria-label="Run"
                position="absolute"
                top="0px"
                right="-24px"
                zIndex="docked"
                onClick={() => {
                  playButtonClickSound();
                  setOutput(execute(code, input));
                }}
              />
              <CockpitPanel
                height="284px"
                border="1px"
                borderColor="brand.primary.400"
                tabNames={["Code", "Input"]}
                panelElements={[
                  <Flex key={"Code"} width="100%">
                    <Textarea
                      width="100%"
                      height="100%"
                      padding="0px"
                      fontFamily="dotGothic16"
                      fontSize="16px"
                      resize="none"
                      onChange={(e) => setCode(e.target.value)}
                      value={code}
                      variant="unstyled"
                    />
                  </Flex>,
                  <Flex key={"Input"} width="100%">
                    <Textarea
                      width="100%"
                      height="100%"
                      padding="0px"
                      fontFamily="dotGothic16"
                      fontSize="16px"
                      resize="none"
                      onChange={(e) => setInput(e.target.value)}
                      value={input}
                      variant="unstyled"
                    />
                  </Flex>,
                ]}
              />
              <CockpitPanel
                height="80px"
                tabNames={["Output"]}
                panelElements={[
                  <Flex key={"Output"} width="100%">
                    <Text
                      overflowY="scroll"
                      fontFamily="dotGothic16"
                      fontSize="16px"
                      whiteSpace="pre-wrap"
                    >
                      {output}
                    </Text>
                  </Flex>,
                ]}
              />
            </Flex>
            <Flex justifyContent="center" flexDirection="column" gap="32px" width="100%">
              <CockpitPanel
                height="460px"
                tabNames={["Document", "Samples"]}
                panelElements={[
                  <Flex
                    key={"Code"}
                    width="100%"
                    height="640px"
                    backgroundColor="background.primary"
                  >
                    <Text>Construction 🚧</Text>
                  </Flex>,
                  <Flex
                    key={"Code"}
                    width="100%"
                    height="640px"
                    backgroundColor="background.primary"
                  >
                    <Text>Construction 🚧</Text>
                  </Flex>,
                ]}
              />
            </Flex>
          </Flex>
        </Animated>
      </Animator>
    </Flex>
  );
}
