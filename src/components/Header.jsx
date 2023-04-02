import { Flex, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  
  return (
    <Flex as="header" >
      <Heading as="h1" size="2xl" mt={8} color="red.300">
        To Do List
      </Heading>
      <IconButton
      background="red.300"
      color="white"
      rounded={50}
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon /> }
      onClick={toggleColorMode}
      m={4}
      position="fixed"
      top={4}
      right={4}
      />
    </Flex>
  );
}
