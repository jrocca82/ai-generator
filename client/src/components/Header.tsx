import { Flex, Heading } from "@chakra-ui/react";

import NavMenu from "./NavMenu";

const Header = () => (
  <Flex
    alignItems="center"
    justifyContent="space-evenly"
    w="100%"
    borderBottom="solid 1px grey"
    paddingY="30px"
  >
    <Heading alignSelf="center">AI Avatar Generator</Heading>
    <NavMenu />
  </Flex>
);

export default Header;
