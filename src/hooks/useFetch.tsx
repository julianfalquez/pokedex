import { useState, useEffect } from "react";
import { getData } from "../utils/httpsRequests";

const useEffectFetch = ({
  url,
  dependencies,
}: {
  url: string;
  dependencies: [any] | [];
}) => {
  const [response, setResponse] = useState<null | any>(null);
  const [error, setError] = useState<Error | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (url !== "") {
      const abortController = new AbortController();
      setIsLoading(true);
      (async () => {
        const response = await getData({
          url: url,
          signal: abortController.signal,
        });
        response instanceof Error ? setError(response) : setResponse(response);
        setIsLoading(false);
      })();
      return () => {
        abortController.abort();
      };
    }
  }, [...dependencies,url]);

  return { isLoading, response, error };
};

export default useEffectFetch;
