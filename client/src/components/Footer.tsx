import { Flex, Text } from "@chakra-ui/react";

const Footer = () => (
  <Flex
    bottom="50px"
    w="100%"
    justifyContent="center"
    alignItems="center"
    borderTop="solid 1px grey"
    paddingY="20px"
  >
    <a href="https://github.com/jrocca82" target="_blank" rel="noreferrer">
      {" "}
      <Text as="u">Github: jrocca82</Text>
    </a>
  </Flex>
);

export default Footer;
