import { useState, useEffect } from "react";
import { CruxHistoryApi, ErrorApi } from "../types/types";

export const useFetch = (
  url: string,
  formFactor: string,
  apiKey: string,
  timeout: number
) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CruxHistoryApi | undefined>();
  const [error, setError] = useState<ErrorApi>();

  const body = {
    url: url,
    formFactor: formFactor,
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
    const data = await response.json();
    if (data?.error) {
      setError({ code: data?.error?.code, message: data?.error?.message });
      setLoading(false);
    }
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const fetchApi = setTimeout(() => fetchData(), timeout * 100);
    return () => clearTimeout(fetchApi);
  }, [url, formFactor]);
  return { loading, data, error };
};
