import { useState, useEffect } from "react";
import { CruxHistoryApi } from "../types/types";

export const useFetch = (url: string, apiKey: string) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CruxHistoryApi | undefined>();
  const [error, setError] = useState<number>(0);

  const body = {
    url: url,
    formFactor: "PHONE",
    metrics: [
      "experimental_time_to_first_byte",
      "largest_contentful_paint",
      "cumulative_layout_shift",
    ],
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://chromeuxreport.googleapis.com/v1/records:queryHistoryRecord?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    if (response?.ok) {
      const data = await response.json();
      setData(data);
      setLoading(false);
    } else {
      setError(response?.status);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => fetchData(), 3500);
  }, [url]);
  return { loading, data, error };
};
