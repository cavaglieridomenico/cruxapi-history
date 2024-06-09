import { useEffect, useState } from "react";
import { useFetchCruxHistory } from "../customHooks/useFetchCruxHistory";
import PercentileRow from "./PercentileRow";
import { FetchCruxHistoryApi } from "../types/types";

type SinglrUrlTableProps = {
  url: string;
  formFactor: string;
  apiKey: string;
  listIndex: number;
  metrics: string;
};

const SingleUrlTableOnlyOneValue = ({
  url,
  formFactor,
  apiKey,
  listIndex,
  metrics,
}: SinglrUrlTableProps) => {
  const [clsData, setClsData] = useState<string[] | null>();
  const [lcpData, setLcpData] = useState<number[] | null>();
  const [ttfbData, setTtfbData] = useState<number[] | null>();
  const [inpData, setInpData] = useState<number[] | null>();
  const { loading, data, error }: FetchCruxHistoryApi = useFetchCruxHistory(
    url,
    formFactor,
    apiKey,
    listIndex
  );

  useEffect(() => {
    if (!data) return;
    setClsData(
      data?.record?.metrics?.cumulative_layout_shift?.percentilesTimeseries?.p75s?.reverse()
    );
    setLcpData(
      data?.record?.metrics?.largest_contentful_paint?.percentilesTimeseries?.p75s?.reverse()
    );
    setTtfbData(
      data?.record?.metrics?.experimental_time_to_first_byte?.percentilesTimeseries?.p75s?.reverse()
    );
    setInpData(
      data?.record?.metrics?.interaction_to_next_paint?.percentilesTimeseries?.p75s?.reverse()
    );
  }, [data]);

  const record = data?.record;
  const responseFormFactor = record?.key?.formFactor;
  const responseUrl = record?.key?.url;

  return (
    <div className={`${loading ? "skeleton" : ""}`}>
      {loading ? (
        <></>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>{`${
                  listIndex + 1
                } - CrUX History (from newest to oldest)`}</th>
                <th>
                  {error
                    ? `${formFactor === "PHONE" ? "MOBILE" : formFactor}`
                    : `${
                        formFactor === "PHONE" ? "MOBILE" : responseFormFactor
                      }`}
                </th>
                <th>{error ? url : responseUrl}</th>
              </tr>
            </thead>
          </table>
          <table>
            <tbody>
              {metrics === "cls" && (
                <PercentileRow
                  percentileList={clsData}
                  errorStatus={error?.message}
                  type={metrics}
                />
              )}
              {metrics === "lcp" && (
                <PercentileRow
                  percentileList={lcpData}
                  type={metrics}
                  errorStatus={error?.message}
                />
              )}
              {metrics === "ttfb" && (
                <PercentileRow
                  percentileList={ttfbData}
                  type={metrics}
                  errorStatus={error?.message}
                />
              )}
              {metrics === "inp" && (
                <PercentileRow
                  percentileList={inpData}
                  type={metrics}
                  errorStatus={error?.message}
                />
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default SingleUrlTableOnlyOneValue;
