import { useEffect, useState } from "react";
import { useFetchCruxHistory } from "../customHooks/useFetchCruxHistory";
import PercentileRow from "./PercentileRow";
import HeaderRow from "./HeaderRow";
import { CollectionPeriodsEntity, FetchCruxHistoryApi } from "../types/types";

type SingleUrlTableProp = {
  data: any;
  listIndex: number;
  formFactor: string;
  collectionPeriods: CollectionPeriodsEntity[] | null;
  clsData: string[] | null;
  lcpData: number[] | null;
  ttfbData: number[] | null;
  inpData: number[] | null;
  metrics: string;
};
const SingleUrlTable = ({
  data,
  listIndex,
  formFactor,
  collectionPeriods,
  clsData,
  lcpData,
  ttfbData,
  inpData,
  metrics,
}: SingleUrlTableProp) => {
  // const [collectionPeriods, setCollectionPeriod] = useState<
  //   CollectionPeriodsEntity[] | null
  // >();
  // const [clsData, setClsData] = useState<string[] | null>();
  // const [lcpData, setLcpData] = useState<number[] | null>();
  // const [ttfbData, setTtfbData] = useState<number[] | null>();
  // const [inpData, setInpData] = useState<number[] | null>();
  // useEffect(() => {
  //   setCollectionPeriod([]);
  //   setClsData([]);
  //   setLcpData([]);
  //   setTtfbData([]);
  //   setInpData([]);
  //   console.log("Render!");
  //   setTimeout(() => {
  //     setCollectionPeriod(data?.data?.record?.collectionPeriods.reverse());
  //     setClsData(
  //       data?.data?.record?.metrics?.cumulative_layout_shift?.percentilesTimeseries?.p75s?.reverse()
  //     );
  //     setLcpData(
  //       data?.data?.record?.metrics?.largest_contentful_paint?.percentilesTimeseries?.p75s?.reverse()
  //     );
  //     setTtfbData(
  //       data?.data?.record?.metrics?.experimental_time_to_first_byte?.percentilesTimeseries?.p75s?.reverse()
  //     );
  //     setInpData(
  //       data?.data?.record?.metrics?.interaction_to_next_paint?.percentilesTimeseries?.p75s?.reverse()
  //     );
  //   }, 1000);

  //   return () => {
  //     setCollectionPeriod([]);
  //     setClsData([]);
  //     setLcpData([]);
  //     setTtfbData([]);
  //     setInpData([]);
  //     console.log("Good Bye!");
  //   };
  // }, [formFactor]);

  const record = data?.data?.record;
  const responseFormFactor = record?.key?.formFactor;
  const responseUrl = record?.key?.url;
  // let collectionPeriods = record?.collectionPeriods?.reverse();
  // let clsData =
  //   record?.metrics?.cumulative_layout_shift?.percentilesTimeseries?.p75s?.reverse();
  // let lcpData =
  //   record?.metrics?.largest_contentful_paint?.percentilesTimeseries?.p75s?.reverse();
  // let ttfbData =
  //   record?.metrics?.experimental_time_to_first_byte?.percentilesTimeseries?.p75s?.reverse();
  // let inpData =
  //   record?.metrics?.interaction_to_next_paint?.percentilesTimeseries?.p75s?.reverse();
  let error = data?.data?.error;
  const errorCode = error?.code;
  const errorMessage = error?.message;

  // useEffect(() => {
  //   console.log("Render!");
  //   return () => {
  //     setCollectionPeriod([]);
  //     setClsData([]);
  //     setLcpData([]);
  //     setTtfbData([]);
  //     setInpData([]);
  //     console.log("Good Bye!");
  //   };
  // }, []);

  return (
    <div className={`single-url-table-wrapper`}>
      <table>
        <thead>
          <tr>
            <th>{`${listIndex + 1} - CrUX History`}</th>
            <th>
              {error
                ? `${formFactor === "PHONE" ? "MOBILE" : formFactor}`
                : `${formFactor === "PHONE" ? "MOBILE" : responseFormFactor}`}
            </th>
            <th>{error ? data?.url : responseUrl}</th>
          </tr>
        </thead>
      </table>
      <table>
        <thead>
          <HeaderRow
            periodList={collectionPeriods}
            errorStatus={error ? `${errorCode} - ${errorMessage}` : ""}
          />
        </thead>
        {metrics === "cwv" ? (
          <tbody>
            <PercentileRow
              percentileList={clsData}
              errorStatus={""}
              type="cls"
            />
            <PercentileRow
              percentileList={lcpData}
              errorStatus={""}
              type="lcp"
            />
            <PercentileRow
              percentileList={ttfbData}
              errorStatus={""}
              type="ttfb"
            />
            <PercentileRow
              percentileList={inpData}
              errorStatus={""}
              type="inp"
            />
          </tbody>
        ) : (
          <tbody>
            {metrics === "cls" && (
              <PercentileRow
                percentileList={clsData}
                errorStatus={""}
                type={metrics}
                isOnlyOneValue
              />
            )}
            {metrics === "lcp" && (
              <PercentileRow
                percentileList={lcpData}
                errorStatus={""}
                type={metrics}
                isOnlyOneValue
              />
            )}
            {metrics === "ttfb" && (
              <PercentileRow
                percentileList={ttfbData}
                errorStatus={""}
                type={metrics}
                isOnlyOneValue
              />
            )}
            {metrics === "inp" && (
              <PercentileRow
                percentileList={inpData}
                errorStatus={""}
                type={metrics}
                isOnlyOneValue
              />
            )}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default SingleUrlTable;
