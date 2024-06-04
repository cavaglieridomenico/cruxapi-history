import { useFetchCrux } from "../customHooks/useFetchCrux";
import { FetchCruxApi } from "../types/types";
import ErrorCell from "./ErrorCell.";

type SingleUrlDailyProps = {
  url: string;
  formFactor: string;
  apiKey: string;
  listIndex: number;
  history: boolean;
};

const SingleUrlDaily = ({
  url,
  formFactor,
  apiKey,
  listIndex,
}: SingleUrlDailyProps) => {
  const { loading, data, error }: FetchCruxApi = useFetchCrux(
    url,
    formFactor,
    apiKey,
    listIndex
  );

  const record = data?.record;
  const responseFormFactor = record?.key?.formFactor;
  const responseUrl = record?.key?.url;
  const period = record?.collectionPeriod;
  const clsPercentile =
    record?.metrics?.cumulative_layout_shift?.percentiles?.p75;
  const lcpPercentile =
    record?.metrics?.largest_contentful_paint?.percentiles?.p75;
  const ttfbPercentile =
    record?.metrics?.experimental_time_to_first_byte?.percentiles?.p75;
  const inpPercentile =
    record?.metrics?.interaction_to_next_paint?.percentiles?.p75;

  return (
    <div
      className={`single-url-table-wrapper daily-table-wrapper ${
        loading ? "skeleton" : ""
      }`}
    >
      {loading ? (
        <></>
      ) : (
        <>
          <p>
            {error
              ? `${listIndex + 1} - CrUX Daily Average - ${
                  formFactor === "PHONE" ? "MOBILE" : formFactor
                } - ${url}`
              : `${listIndex + 1} - CrUX Daily Average - ${
                  responseFormFactor === "PHONE" ? "MOBILE" : responseFormFactor
                } - ${responseUrl}`}
          </p>
          <table>
            <thead>
              <tr>
                <th>PERIODS</th>
                {error ? (
                  <ErrorCell errorStatus={error.code} />
                ) : (
                  <th className="header-cell-daily">{` 
          ${period?.lastDate?.day}/${period?.lastDate?.month}/${period?.lastDate?.year}
          ${period?.firstDate?.day}/${period?.firstDate?.month}/${period?.firstDate?.year}`}</th>
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>CLS</b>
                </td>
                {error ? (
                  <ErrorCell errorStatus={error.message} />
                ) : (
                  <td>{clsPercentile}</td>
                )}
              </tr>
              <tr>
                <td>
                  <b>LCP</b>
                </td>
                {error ? (
                  <ErrorCell errorStatus={error.message} />
                ) : (
                  <td>
                    {lcpPercentile}
                    {lcpPercentile ? "ms" : ""}
                  </td>
                )}
              </tr>
              <tr>
                <td>
                  <b>TTFB</b>
                </td>
                {error ? (
                  <ErrorCell errorStatus={error.message} />
                ) : (
                  <td>
                    {ttfbPercentile}
                    {ttfbPercentile ? "ms" : ""}
                  </td>
                )}
              </tr>
              <tr>
                <td>
                  <b>INP</b>
                </td>
                {error ? (
                  <ErrorCell errorStatus={error.message} />
                ) : (
                  <td>
                    {inpPercentile}
                    {inpPercentile ? "ms" : ""}
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default SingleUrlDaily;
