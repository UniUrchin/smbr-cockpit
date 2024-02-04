import {
  Flex,
  FlexProps,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  TabProps,
  Tabs,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { useSound } from "use-sound";

export const CockpitPanel = ({
  tabNames,
  panelElements,
  ...props
}: {
  tabNames: string[];
  panelElements: ReactElement[];
} & FlexProps) => {
  const [playButtonClickSound] = useSound("/sounds/button-click.mp3");

  const CockpitPanelTab = (props: TabProps) => {
    return (
      <Tab
        width="120px"
        height="32px"
        color="brand.primary.400"
        fontFamily="monomaniacOne"
        fontSize="16px"
        border="1px"
        borderColor="brand.primary.400"
        _selected={{ color: "text.secondary", backgroundColor: "brand.primary.400" }}
        backgroundColor="background.secondary"
        onClick={() => playButtonClickSound()}
      >
        {props.children}
      </Tab>
    );
  };

  return (
    <Tabs width="100%" variant="unstyled">
      <TabList>
        <Flex flexDirection="row" gap="8px">
          {tabNames.map((tabName, index) => (
            <CockpitPanelTab key={index}>{tabName}</CockpitPanelTab>
          ))}
        </Flex>
      </TabList>
      <TabPanels>
        {panelElements.map((panelElement, index) => (
          <TabPanel key={index} padding="0px">
            <Flex padding="16px" backgroundColor="background.transparent.secondary">
              <Flex
                overflowY="scroll"
                width="100%"
                padding="16px"
                backgroundColor="background.secondary"
                {...props}
              >
                {panelElement}
              </Flex>
            </Flex>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
