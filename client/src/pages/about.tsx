import { Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => (
  <>
    <Head>
      <title>About: Avatar Generator</title>
      <meta name="description" content="About AI training" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
    >
      <Header />
      <Heading>About the Project</Heading>
      <AboutSection
        heading="Purpose"
        body={
          <Text>
            This app was created as part of self-directed professional
            development by the{" "}
            <Link style={{ textDecoration: "underline" }} href="/builder">
              builder
            </Link>
            . The goals were to learn about interacting with AI, form creation
            and validation, and integrating Next web apps and mobile
            development.
          </Text>
        }
      />
      <AboutSection
        heading="Inspiration"
        body={
          <Text>
            This project inspired by the project at{" "}
            <a
              href="https://buildspace.so/p/build-ai-avatars"
              style={{ textDecoration: "underline" }}
            >
              Buildspace.so
            </a>
            . However, some key modifications were made, including the use of
            Typescript, React Forms, React Query, and the implementation of form
            validation with zod.
          </Text>
        }
      />
      <AboutSection
        heading="Implementing AI"
        body={
          <Text>
            Implementing AI technology involved following the instructions
            offered in the{" "}
            <a
              href="https://buildspace.so/p/build-ai-avatars"
              style={{ textDecoration: "underline" }}
            >
              Buildspace
            </a>{" "}
            course. Both the instructions on Buildspace, and the tools used,
            were open source. The model was created and trained using
            DreamBooth, HuggingFace hosts the model to allow for API fetching.
          </Text>
        }
      />
      <AboutSection
        heading="Creating the Front End"
        body={
          <Text>
            The front-end was generated as a Next.js web app, using Typescript
            and Chakra UI components for style. A React Native/Expo app is also
            in the process of being developed.
          </Text>
        }
      />

      <AboutSection
        heading="Future Iterations"
        body={
          <Text>
            Future iterations of this project include the development of a
            mobile app using Expo and React Native, as well as possible
            interactions with blockchain.
          </Text>
        }
      />

      <Footer />
    </Flex>
  </>
);

export default About;
