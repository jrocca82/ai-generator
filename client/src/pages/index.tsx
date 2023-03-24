import { Flex } from "@chakra-ui/react";
import Head from "next/head";

import AIGenerator from "../components/AIGenerator";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => (
  <>
    <Head>
      <title>Jo Rocca: Avatar Generator</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      maxW="100vw"
    >
      <Header />
      <AIGenerator />
      <Footer />
    </Flex>
  </>
);

export default Home;
