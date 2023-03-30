import { Flex, Heading } from "@chakra-ui/react";

import NavMenu from "./NavMenu";

const Header = () => (
  <Flex
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    top="0px"
    borderBottom="solid 1px grey"
    width="100%"
    height="150px"
  >
    <Heading>AI Avatar Generator</Heading>
    <NavMenu />
  </Flex>
);

export default Header;
