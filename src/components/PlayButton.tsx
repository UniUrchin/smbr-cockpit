"use client";

import { type FrameSVGPathGeneric } from "@arwes/frames";
import { FrameSVG, type FrameSVGProps, useFrameSVGAssemblingAnimation } from "@arwes/react";
import { Animator } from "@arwes/react-animator";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, BoxProps, Button, Flex, Text } from "@chakra-ui/react";
import { useState, useMemo, useRef } from "react";

export const PlayButton = (props: BoxProps) => {
  const [active, setActive] = useState(false);

  const PlayButtonBackgroundFrameSVG = (props: FrameSVGProps) => {
    const paths: FrameSVGPathGeneric[] = useMemo(
      () => [
        {
          name: "bg",
          style: {
            strokeWidth: 0,
            fill: "var(--chakra-colors-brand-primary-400)",
          },
          path: [
            ["M", 4, 4],
            ["L", "100% - 12", 4],
            ["L", "100% - 4", 12],
            ["L", "100% - 4", "100% - 4"],
            ["L", 12, "100% - 4"],
            ["L", 4, "100% - 12"],
          ],
        },
      ],
      []
    );

    return <FrameSVG paths={paths} {...props} />;
  };

  const PlayButtonLineFrameSVG = (props: FrameSVGProps) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

    const paths: FrameSVGPathGeneric[] = useMemo(
      () => [
        {
          name: "line",
          style: {
            strokeWidth: "1",
            stroke: "var(--chakra-colors-brand-primary-400)",
            fill: "none",
            filter: "drop-shadow(0 0 2px var(--chakra-colors-brand-primary-400)",
          },
          path: [
            ["M", 2, 2],
            ["L", "100% - 11", 2],
            ["L", "100% - 2", 11],
            ["L", "100% - 2", "100% - 2"],
          ],
        },
        {
          name: "line",
          style: {
            strokeWidth: "1",
            stroke: "var(--chakra-colors-brand-primary-400)",
            fill: "none",
            filter: "drop-shadow(0 0 2px var(--chakra-colors-brand-primary-400)",
          },
          path: [
            ["M", "100% - 2", "100% - 2"],
            ["L", 11, "100% - 2"],
            ["L", 2, "100% - 11"],
            ["L", 2, 2],
          ],
        },
      ],
      []
    );

    return <FrameSVG paths={paths} elementRef={svgRef} onRender={onRender} {...props} />;
  };

  return (
    <Animator root active={active}>
      <Box
        position="relative"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        {...props}
      >
        <Button position="absolute" width="100%" height="100%" variant="unstyled">
          <Flex alignItems="center" justifyContent="center" flexDirection="row" gap="4px">
            <Text height="28px" color="text.secondary" fontFamily="monomaniacOne" fontSize="16px">
              Go Playground
            </Text>
            <ArrowForwardIcon color="text.secondary" boxSize="20px" />
          </Flex>
        </Button>
        <PlayButtonBackgroundFrameSVG style={{ position: "absolute" }} />
        <PlayButtonLineFrameSVG style={{ position: "absolute" }} />
      </Box>
    </Animator>
  );
};
