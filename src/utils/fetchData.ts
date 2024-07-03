const fetchData = async (
  url: string,
  formFactor: string,
  googleUrl: string
) => {
  const body = {
    url: url,
    formFactor: formFactor,
    metrics: [
      "experimental_time_to_first_byte",
      "largest_contentful_paint",
      "cumulative_layout_shift",
      "interaction_to_next_paint",
    ],
  };

  const response = await fetch(googleUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

export default fetchData;
