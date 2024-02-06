import { type FrameSVGPathGeneric } from "@arwes/frames";
import {
  FrameSVG,
  type FrameSVGProps,
  useFrameSVGAssemblingAnimation,
  Animator,
} from "@arwes/react";
import { Box, BoxProps, IconButton } from "@chakra-ui/react";
import { useState, useMemo, useRef } from "react";

import { RunIcon } from "./icons/RunIcon";

export const RunButton = (props: BoxProps) => {
  const [active, setActive] = useState(false);

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
            ["M", 32, 2],
            ["A", 30, 30, 0, 0, 1, 32, 62],
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
            ["M", 32, 62],
            ["A", 30, 30, 0, 0, 1, 32, 2],
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
        alignItems="center"
        justifyContent="center"
        display="flex"
        width="64px"
        height="64px"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        {...props}
      >
        <IconButton
          boxSize="56px"
          fontSize="24px"
          aria-label="Run"
          backgroundColor="brand.primary.400"
          colorScheme="none"
          icon={<RunIcon padding="0 0 0 4px" />}
          isRound={true}
          variant="solid"
        />
        <PlayButtonLineFrameSVG style={{ position: "absolute" }} />
      </Box>
    </Animator>
  );
};
