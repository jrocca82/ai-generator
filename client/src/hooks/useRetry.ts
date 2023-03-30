import { useState } from "react";

const useRetry = () => {
  const maxRetries = 10;
  const [retry, setRetry] = useState(0);
  const [error, setError] = useState<string>();
  const [retryCount, setRetryCount] = useState(maxRetries);

  const sleep = (ms: number) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  if (retry > 0) {
    setRetryCount((prevState) => {
      if (prevState === 0) {
        return 0;
      }
      return prevState - 1;
    });

    setRetry(0);
  }

  const runRetry = async () => {
    if (retryCount === 0) {
      setError(
        `Model still loading after ${maxRetries} retries. Try request again in 5 minutes.`
      );
      setRetryCount(maxRetries);
      return;
    }

    setError(`Trying again in ${retry} seconds.`);

    await sleep(retry * 1000);
  };

  return {
    error,
    runRetry,
  };
};

export default useRetry;
