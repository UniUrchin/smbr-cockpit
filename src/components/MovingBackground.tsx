import { Animator } from "@arwes/react-animator";
import { Dots, MovingLines } from "@arwes/react-bgs";
import { useToken } from "@chakra-ui/react";

export const MovingBackground = () => {
  return (
    <Animator>
      <Dots color={useToken("colors", ["brand.primary.400"])[0]} type="circle" size={1.2} />
      <MovingLines
        lineColor={useToken("colors", ["brand.primary.200"])[0]}
        lineWidth={0.4}
        sets={4}
      />
    </Animator>
  );
};
