import { useState, useEffect } from "react";

export const useFetch = (url: string, apiKey: string) => {
  const [data, setData] = useState();

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
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return data;
};
