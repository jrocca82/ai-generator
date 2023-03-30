import { Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type AboutSectionProps = {
  heading: string;
  body: ReactNode;
};

const AboutSection = ({ heading, body }: AboutSectionProps) => (
  <Flex flexDirection="column" width="90%" my="30px">
    <Heading size="md" marginBottom="15px">
      {heading}
    </Heading>
    {body}
  </Flex>
);

export default AboutSection;
