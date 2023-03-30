import { Text, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

const NavMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <Flex>
      <Button
        width="120px"
        bgColor="yellow"
        color="black"
        margin="10px"
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
          zIndex={10}
        >
          <Link href="/">
            <Text borderBottom="solid 1px grey" padding="10px">
              Home: Generate Avatar
            </Text>
          </Link>
          <Link href="/about">
            <Text my="5px" borderBottom="solid 1px grey" padding="10px">
              About the Project
            </Text>
          </Link>
          <Link href="/builder">
            <Text padding="10px">About the Builder</Text>
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default NavMenu;
