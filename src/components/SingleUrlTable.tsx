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
  responseFormFactor: string;
  responseUrl: string;
  errorCode: string;
  errorMessage: string;
  errorStatus: string;
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
  responseFormFactor,
  responseUrl,
  errorCode,
  errorMessage,
}: SingleUrlTableProp) => {
  return (
    <div className={`single-url-table-wrapper`}>
      <table>
        <thead>
          <tr>
            <th>{`${listIndex + 1} - CrUX History`}</th>
            <th>
              {errorCode
                ? `${formFactor === "PHONE" ? "MOBILE" : formFactor}`
                : `${formFactor === "PHONE" ? "MOBILE" : responseFormFactor}`}
            </th>
            <th>{errorCode ? data?.url : responseUrl}</th>
          </tr>
        </thead>
      </table>
      <table>
        <thead>
          <HeaderRow
            periodList={collectionPeriods}
            errorStatus={errorCode ? `${errorCode} - ${errorMessage}` : ""}
          />
        </thead>
        {metrics === "cwv" ? (
          <tbody>
            <PercentileRow
              percentileList={clsData}
              errorStatus={errorCode ? `${errorCode} - ${errorMessage}` : ""}
              type="cls"
            />
            <PercentileRow
              percentileList={lcpData}
              errorStatus={errorCode ? `${errorCode} - ${errorMessage}` : ""}
              type="lcp"
            />
            <PercentileRow
              percentileList={ttfbData}
              errorStatus={errorCode ? `${errorCode} - ${errorMessage}` : ""}
              type="ttfb"
            />
            <PercentileRow
              percentileList={inpData}
              errorStatus={errorCode ? `${errorCode} - ${errorMessage}` : ""}
              type="inp"
            />
          </tbody>
        ) : (
          <tbody>
            {metrics === "cls" && (
              <PercentileRow
                percentileList={clsData}
                errorStatus={errorCode ? `${errorCode} - ${errorMessage}` : ""}
                type={metrics}
                isOnlyOneValue
              />
            )}
            {metrics === "lcp" && (
              <PercentileRow
                percentileList={lcpData}
                errorStatus={errorCode ? `${errorCode} - ${errorMessage}` : ""}
                type={metrics}
                isOnlyOneValue
              />
            )}
            {metrics === "ttfb" && (
              <PercentileRow
                percentileList={ttfbData}
                errorStatus={errorCode ? `${errorCode} - ${errorMessage}` : ""}
                type={metrics}
                isOnlyOneValue
              />
            )}
            {metrics === "inp" && (
              <PercentileRow
                percentileList={inpData}
                errorStatus={errorCode ? `${errorCode} - ${errorMessage}` : ""}
                type={metrics}
                isOnlyOneValue
              />
            )}
            {metrics === "lcp+ttfb" && (
              <>
                <PercentileRow
                  percentileList={lcpData}
                  errorStatus={
                    errorCode ? `${errorCode} - ${errorMessage}` : ""
                  }
                  type={"lcp"}
                  isOnlyOneValue
                />
                <PercentileRow
                  percentileList={ttfbData}
                  errorStatus={
                    errorCode ? `${errorCode} - ${errorMessage}` : ""
                  }
                  type={"ttfb"}
                  isOnlyOneValue
                />
              </>
            )}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default SingleUrlTable;
