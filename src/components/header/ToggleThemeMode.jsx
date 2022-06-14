import React from 'react'
import { Flex, FormLabel, HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function ToggleThemeMode() {
const { colorMode, toggleColorMode } = useColorMode();
return (
  <Flex>
    <HStack alignItems="center" position="relative">
      <Switch
        onChange={() => toggleColorMode()}
        pos="relative"
        top="0"
        right="0"
        m="1rem"
        size="md"
        rounded="md"
        id="toggle"
      ></Switch>
      {colorMode === "dark" ? (
        <FormLabel htmlFor="toggle" cursor="pointer">
          <HStack>
            <Text m="auto" position="relative">
              Light
            </Text>
            <SunIcon color="orange.200" />
          </HStack>
        </FormLabel>
      ) : (
        <FormLabel htmlFor="toggle" cursor="pointer">
          <HStack>
            <Text>Dark</Text>
            <MoonIcon color="blue.700" />
          </HStack>
        </FormLabel>
      )}
    </HStack>
  </Flex>
);
}

export default ToggleThemeMode
