import { useEffect, useState } from "react";
import { useFetch } from "../customHooks/useFetch";
import PercentileRow from "./PercentileRow";
import HeaderRow from "./HeaderRow";
import { CollectionPeriodsEntity, FetchCruxHistoryApi } from "../types/types";

type SinglrUrlTableProps = {
  url: string;
  formFactor: string;
  apiKey: string;
  listIndex: number;
};

const SingleUrlTable = ({
  url,
  formFactor,
  apiKey,
  listIndex,
}: SinglrUrlTableProps) => {
  const [collectionPeriods, setCollectionPeriod] = useState<
    CollectionPeriodsEntity[] | null
  >();
  const [clsData, setClsData] = useState<string[] | null>();
  const [lcpData, setLcpData] = useState<number[] | null>();
  const [ttfbData, setTtfbData] = useState<number[] | null>();
  const { loading, data, error }: FetchCruxHistoryApi = useFetch(
    url,
    formFactor,
    apiKey,
    listIndex
  );

  useEffect(() => {
    if (!data) return;
    setCollectionPeriod(data?.record?.collectionPeriods?.reverse());
    setClsData(
      data?.record?.metrics?.cumulative_layout_shift?.percentilesTimeseries?.p75s?.reverse()
    );
    setLcpData(
      data?.record?.metrics?.largest_contentful_paint?.percentilesTimeseries?.p75s?.reverse()
    );
    setTtfbData(
      data?.record?.metrics?.experimental_time_to_first_byte?.percentilesTimeseries?.p75s?.reverse()
    );
  }, [data]);

  const record = data?.record;
  const responseFormFactor = record?.key?.formFactor;
  const responseUrl = record?.key?.url;

  return (
    <div className={`single-url-table-wrapper ${loading ? "skeleton" : ""}`}>
      {loading ? (
        <></>
      ) : (
        <>
          <p>
            {error
              ? `${listIndex + 1} - ${
                  formFactor === "PHONE" ? "MOBILE" : formFactor
                } - ${url}`
              : `${listIndex + 1} - ${
                  responseFormFactor === "PHONE" ? "MOBILE" : responseFormFactor
                } - ${responseUrl}`}
          </p>
          <table>
            <thead>
              <HeaderRow
                periodList={collectionPeriods}
                errorStatus={error?.code}
              />
            </thead>
            <tbody>
              <PercentileRow
                percentileList={clsData}
                errorStatus={error?.message}
                type="cls"
              />
              <PercentileRow
                percentileList={lcpData}
                type="lcp"
                errorStatus={error?.message}
              />
              <PercentileRow
                percentileList={ttfbData}
                type="ttfb"
                errorStatus={error?.message}
              />
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default SingleUrlTable;
