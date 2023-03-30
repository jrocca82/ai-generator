import { Flex, Button, Input, Heading, Text, Image } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { useGenerate } from "../hooks/useGenerate";
import { InputBodyType, inputSchema } from "../schema";

const AIGenerator = () => {
  const {
    mutate,
    isLoading,
    error: formError,
    data,
    failureCount,
  } = useGenerate();

  const { handleSubmit, control } = useForm<InputBodyType>({
    resolver: zodResolver(inputSchema),
    mode: "onBlur",
  });

  const onSubmit = handleSubmit((formData) => mutate(formData));

  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center">
      <Heading fontSize="20px" margin="15px">
        Type a prompt and hit &ldquo;Generate Image&ldquo;. Be sure to use
        &ldquo;jorocca&ldquo; in your prompt to get an image of me!
      </Heading>
      <Controller
        control={control}
        name="input"
        render={({
          field: { onChange, value, onBlur },
          fieldState: { error },
        }) => (
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Input
              placeholder="Enter your prompt"
              isDisabled={isLoading}
              onChange={onChange}
              value={value}
              autoCapitalize="none"
              autoComplete="none"
              onBlur={onBlur}
              width="80%"
            />
            <Flex minHeight="30px">
              <Text marginTop="5px" color="red">
                {formError?.toString() || error?.message}
              </Text>
              <Text marginTop="5px" color="red">
                {failureCount > 0 &&
                  !formError &&
                  "Failed to generate image, trying again..."}
              </Text>
            </Flex>
            <Button
              color="black"
              bgColor="yellow"
              w="300px"
              margin="10px"
              isLoading={isLoading}
              onClick={onSubmit}
            >
              <Text>Generate Image</Text>
            </Button>
            <Flex
              width="100%"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              height="550px"
            >
              {data && (
                <Image
                  src={data.image}
                  width="512px"
                  height="512"
                  alt={value}
                  my="30px"
                />
              )}
            </Flex>
          </Flex>
        )}
      />
    </Flex>
  );
};

export default AIGenerator;
