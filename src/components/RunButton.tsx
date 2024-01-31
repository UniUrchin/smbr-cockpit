import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { RunIcon } from "./icons/RunIcon";

export const RunButton = (props: IconButtonProps) => {
  return (
    <IconButton
      boxSize="64px"
      fontSize="24px"
      backgroundColor="brand.primary.400"
      colorScheme="none"
      icon={<RunIcon padding="0 0 0 4px" />}
      isRound={true}
      variant="solid"
      {...props}
    />
  );
};
