import { Text, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

const NavMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      position="absolute"
      right="50px"
      width="300px"
    >
      <Button
        width="120px"
        bgColor="yellow"
        color="black"
        onClick={() => setShowMenu((v) => !v)}
      >
        Learn More{" "}
        <Text m="3px" mb="10px">
          &#x2304;
        </Text>
      </Button>
      {showMenu && (
        <Flex
          position="absolute"
          marginTop="50px"
          bgColor="black"
          border="solid 1px white"
          borderRadius="5px"
          flexDirection="column"
          width="200px"
        >
          <Link href="/">
            <Text borderBottom="solid 1px grey" padding="10px">
              Home: Generate Avatar
            </Text>
          </Link>
          <Link href="/about">
            <Text my="5px" borderBottom="solid 1px grey" padding="10px">
              About: AI Training
            </Text>
          </Link>
          <Link href="/builder">
            <Text padding="10px">About: Jo Rocca</Text>
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default NavMenu;
