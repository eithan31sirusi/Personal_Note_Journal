import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>();

  const activeHttpRequests = useRef<any>([]);

  const sendRequest = useCallback(
    async (url: any, method = "GET", body: any = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl: any) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        console.log("responseData", responseData);

        return responseData;
      } catch (err: any) {
        setError(err.message || "Something went wrong, please try again.");
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl: any) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
