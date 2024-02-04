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

const SmbrCommandList: { name: string; description: string }[] = [
  {
    name: "しろくま",
    description: "Increment the pointer (&gt;)",
  },
  {
    name: "とんかつ",
    description: "Decrement the pointer (&lt;)",
  },
  {
    name: "ぺんぎん?",
    description: "Increment the value at the pointer (+)",
  },
  {
    name: "とかげ",
    description: "Decrement the value at the pointer (-)",
  },
  {
    name: "ねこ",
    description: "Output the value at the pointer (.)",
  },
  {
    name: "たぴおか",
    description: "Read 1 byte from input and store it at the pointer (,)",
  },
  {
    name: "えびふらいのしっぽ",
    description:
      "Jump to the corresponding &quot;あじふらいのしっぽ&quot; if the value at the pointer is 0 ([) ",
  },
  {
    name: "あじふらいのしっぽ",
    description:
      "Jump to the corresponding &quot;えびふらいのしっぽ&quot; if the value at the pointer is not 0 (])",
  },
  {
    name: "すずめ",
    description: "Copy the value at the pointer to the copy area (original)",
  },
  {
    name: "おばけ",
    description: "Assign the value stored in the copy area to the value at the pointer (original)",
  },
  {
    name: "ざっそう",
    description: "Reset the value at the pointer to 0 (original)",
  },
];

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
            <Link href="/" onClick={() => playButtonClickSound()}>
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
              <Link href="https://twitter.com" onClick={() => playButtonClickSound()}>
                <TwitterIcon boxSize="36px" />
              </Link>
              <Link
                href="https://github.com/UniUrchin/smbr-cockpit"
                onClick={() => playButtonClickSound()}
              >
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
                    flexDirection="column"
                    gap="16px"
                    overflow="scroll"
                    width="100%"
                    height="100%"
                    padding="16px 16px"
                    backgroundColor="background.primary"
                  >
                    <Text
                      padding="0 4px"
                      color="text.secondary"
                      fontFamily="monomaniacOne"
                      fontSize="24px"
                    >
                      - What is SMBR?
                    </Text>
                    <Flex width="100%" padding="16px" background="background.secondary">
                      {/* prettier-ignore */}
                      <Text color="text.primary.800" fontFamily="monomaniacOne" fontSize="16px">
                        summiko-brain(SMBR) is a Brainf**k derivative inspired by &quot;Sumikko Gurashi&quot;. <br />
                        The language specification of SMBR is based on the definition by Brian Raiter. <br />
                        Additionally, several custom commands have been added to SMBR that are not present in the original Brainf**k. <br />
                        For more details, please refer to the SMBR command list.
                      </Text>
                    </Flex>
                    <Text
                      padding="0 4px"
                      color="text.secondary"
                      fontFamily="monomaniacOne"
                      fontSize="24px"
                    >
                      - Rules of SMBR
                    </Text>
                    <Flex width="100%" padding="16px" background="background.secondary">
                      {/* prettier-ignore */}
                      <Text color="text.primary.800" fontFamily="monomaniacOne" fontSize="16px">
                      ・ Any characters other than the 11 keywords listed above will be ignored by the interpreter. <br/><br/>
                      ・ All memory blocks on the &quot;array&quot; are set to zero at the beginning of the program. And the memory pointer starts out on the very left most memory block. <br/><br/>
                      ・ Loops may be nested as many times as you want. But all &quot;えびふらいのしっぽ&quot; must have a corresponding &quot;あじふらいのしっぽ&quot;.
                      </Text>
                    </Flex>
                    <Text
                      padding="0 4px"
                      color="text.secondary"
                      fontFamily="monomaniacOne"
                      fontSize="24px"
                    >
                      - SMBR command list
                    </Text>
                    <Flex
                      flexDirection="column"
                      gap="16px"
                      width="100%"
                      padding="16px"
                      background="background.secondary"
                    >
                      <Text color="text.primary.800" fontFamily="monomaniacOne" fontSize="16px">
                        The following commands can be used with SMBR. Some commands are compatible
                        with original Brain F**k.
                      </Text>

                      {SmbrCommandList.map((command) => (
                        <Flex
                          key={command.name}
                          justifyContent="space-between"
                          flexDirection="row"
                          gap="16px"
                        >
                          <Text
                            color="text.primary.800"
                            fontFamily="monomaniacOne"
                            fontSize="16px"
                            whiteSpace="nowrap"
                          >
                            ・ {command.name}:{" "}
                          </Text>
                          <Text
                            width="320px"
                            color="text.primary.800"
                            fontFamily="monomaniacOne"
                            fontSize="16px"
                          >
                            {command.description}
                          </Text>
                        </Flex>
                      ))}
                    </Flex>
                  </Flex>,
                  <Flex
                    key={"Code"}
                    width="100%"
                    height="640px"
                    backgroundColor="background.primary"
                  >
                    <Text color="text.white" fontFamily="monomaniacOne" fontSize="24px">
                      Construction 🚧
                    </Text>
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
