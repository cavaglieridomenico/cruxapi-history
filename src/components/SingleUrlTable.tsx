import { useEffect, useState } from "react";
import { useFetchCruxHistory } from "../customHooks/useFetchCruxHistory";
import PercentileRow from "./PercentileRow";
import HeaderRow from "./HeaderRow";
import { CollectionPeriodsEntity, FetchCruxHistoryApi } from "../types/types";
type SingleUrlTableProp = {
  data: any;
  listIndex: number;
  formFactor: string;
};
const SingleUrlTable = ({
  data,
  listIndex,
  formFactor,
}: SingleUrlTableProp) => {
  // const [collectionPeriods, setCollectionPeriod] = useState<
  //   CollectionPeriodsEntity[] | null
  // >();
  // const [clsData, setClsData] = useState<string[] | null>();
  // const [lcpData, setLcpData] = useState<number[] | null>();
  // const [ttfbData, setTtfbData] = useState<number[] | null>();
  // const [inpData, setInpData] = useState<number[] | null>();
  // const { loading, data, error }: FetchCruxHistoryApi = useFetchCruxHistory(
  //   url,
  //   formFactor,
  //   apiKey,
  //   listIndex
  // );
  // useEffect(() => {
  //   if (!data) return;
  //   setCollectionPeriod(data?.record?.collectionPeriods?.reverse());
  //   setClsData(
  //     data?.record?.metrics?.cumulative_layout_shift?.percentilesTimeseries?.p75s?.reverse()
  //   );
  //   setLcpData(
  //     data?.record?.metrics?.largest_contentful_paint?.percentilesTimeseries?.p75s?.reverse()
  //   );
  //   setTtfbData(
  //     data?.record?.metrics?.experimental_time_to_first_byte?.percentilesTimeseries?.p75s?.reverse()
  //   );
  //   setInpData(
  //     c
  //   );
  // }, [data]);

  const record = data?.data?.record;
  const responseFormFactor = record?.key?.formFactor;
  const responseUrl = record?.key?.url;
  const collectionPeriods = record?.collectionPeriods?.reverse();
  const clsData =
    record?.metrics?.cumulative_layout_shift?.percentilesTimeseries?.p75s?.reverse();
  const lcpData =
    record?.metrics?.largest_contentful_paint?.percentilesTimeseries?.p75s?.reverse();
  const ttfbData =
    record?.metrics?.experimental_time_to_first_byte?.percentilesTimeseries?.p75s?.reverse();
  const inpData =
    record?.metrics?.experimental_time_to_first_byte?.percentilesTimeseries?.p75s?.reverse();
  const error = false;

  return (
    <div className={`single-url-table-wrapper`}>
      <table>
        <thead>
          <tr>
            <th>{`${listIndex + 1} - CrUX History (from newest to oldest)`}</th>
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
          <HeaderRow periodList={collectionPeriods} errorStatus={""} />
        </thead>
        <tbody>
          <PercentileRow percentileList={clsData} errorStatus={""} type="cls" />
          <PercentileRow percentileList={lcpData} errorStatus={""} type="lcp" />
          <PercentileRow
            percentileList={ttfbData}
            errorStatus={""}
            type="ttfb"
          />
          <PercentileRow percentileList={inpData} errorStatus={""} type="inp" />
          {/* <PercentileRow
              percentileList={lcpData}
              type="lcp"
              errorStatus={""}
            />
            <PercentileRow
              percentileList={ttfbData}
              type="ttfb"
              errorStatus={""}
            />
            <PercentileRow
              percentileList={inpData}
              type="inp"
              errorStatus={""}
            /> */}
        </tbody>
      </table>
    </div>
    // <div className={`single-url-table-wrapper ${loading ? "skeleton" : ""}`}>
    //   {loading ? (
    //     <></>
    //   ) : (
    //     <>
    //       <p>
    //         {error
    //           ? `${listIndex + 1} - CrUX History - ${
    //               formFactor === "PHONE" ? "MOBILE" : formFactor
    //             } - ${url}`
    //           : `${listIndex + 1} - CrUX History - ${
    //               responseFormFactor === "PHONE" ? "MOBILE" : responseFormFactor
    //             } - ${responseUrl}`}
    //       </p>
    //       <table>
    //         <thead>
    //           <HeaderRow
    //             periodList={collectionPeriods}
    //             errorStatus={error?.code}
    //           />
    //         </thead>
    //         <tbody>
    //           <PercentileRow
    //             percentileList={clsData}
    //             errorStatus={error?.message}
    //             type="cls"
    //           />
    //           <PercentileRow
    //             percentileList={lcpData}
    //             type="lcp"
    //             errorStatus={error?.message}
    //           />
    //           <PercentileRow
    //             percentileList={ttfbData}
    //             type="ttfb"
    //             errorStatus={error?.message}
    //           />
    //           <PercentileRow
    //             percentileList={inpData}
    //             type="inp"
    //             errorStatus={error?.message}
    //           />
    //         </tbody>
    //       </table>
    //     </>
    //   )}
    // </div>
  );
};

export default SingleUrlTable;
