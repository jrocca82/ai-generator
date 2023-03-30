import axios from "axios";
import { useMutation } from "react-query";

import { InputBodyType } from "../schema";

const generateImage = async (body: InputBodyType) => {
  const { data } = await axios.post("/api/generate", {
    headers: {
      "Content-Type": "image/jpeg",
    },
    body,
  });

  return data;
};

export const useGenerate = () =>
  useMutation({
    mutationFn: generateImage,
    retry: 20,
    retryDelay: 1000,
  });
