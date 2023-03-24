import {
  Flex,
  Button,
  Input,
  Heading,
  Spinner,
  Text,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const AIGenerator = () => {
  const maxRetries = 20;

  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [img, setImg] = useState("");
  const [retry, setRetry] = useState(0);
  const [retryCount, setRetryCount] = useState(maxRetries);

  const generateAction = async () => {
    setLoading(true);

    if (retry > 0) {
      setRetryCount((prevState) => {
        if (prevState === 0) {
          return 0;
        }
        return prevState - 1;
      });

      setRetry(0);
    }

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "image/jpeg",
      },
      body: JSON.stringify({ input }),
    });

    const data = await response.json();

    if (response.status === 503) {
      setErrorMessage(`Operation timed out. Trying again...`);
      return;
    }

    if (!response.ok) {
      setErrorMessage(`Error: ${data.error}`);
      return;
    }

    setImg(data.image);
    setLoading(false);
  };

  const sleep = (ms: number) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  useEffect(() => {
    const runRetry = async () => {
      if (retryCount === 0) {
        setErrorMessage(
          `Model still loading after ${maxRetries} retries. Try request again in 5 minutes.`
        );
        setRetryCount(maxRetries);
        return;
      }

      setErrorMessage(`Trying again in ${retry} seconds.`);

      await sleep(retry * 1000);

      await generateAction();
    };

    if (retry === 0) {
      return;
    }

    runRetry();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- not needed
  }, [retry]);

  return (
    <Flex flexDir="column" paddingY="20px">
      <Heading fontSize="20px" mb="15px">
        Type a prompt and hit &ldquo;generate&ldquo;. Be sure to use
        &ldquo;jorocca&ldquo; in your prompt to get an image of me!
      </Heading>
      <Flex justifyContent="space-between">
        <Input
          placeholder="Type your prompt here"
          _placeholder={{ color: "white" }}
          color="white"
          bgColor="grey"
          w="60%"
          focusBorderColor="yellow"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button
          color="black"
          bgColor="yellow"
          w="300px"
          onClick={generateAction}
        >
          {loading ? <Spinner /> : <Text>Generate Image</Text>}
        </Button>
      </Flex>
      {errorMessage && (
        <Text color="red" my="10px">
          {errorMessage}
        </Text>
      )}
      {img && (
        <Flex
          width="100%"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image src={img} width={512} height={512} alt={input} my="30px" />
        </Flex>
      )}
    </Flex>
  );
};

export default AIGenerator;
