import { CollectionPeriodsEntity } from "../types/types";
import ErrorCell from "./ErrorCell.";

type SingleUrlDailyProps = {
  data: any;
  listIndex: number;
  formFactor: string;
  collectionPeriod: CollectionPeriodsEntity | null;
  clsData: string | null;
  lcpData: number | null;
  ttfbData: number | null;
  inpData: number | null;
  metrics: string;
  responseFormFactor: string;
  responseUrl: string;
  errorCode: string;
  errorMessage: string;
  errorStatus: string;
};

const SingleUrlDaily = ({
  data,
  listIndex,
  formFactor,
  collectionPeriod,
  clsData,
  lcpData,
  ttfbData,
  inpData,
  metrics,
  responseFormFactor,
  responseUrl,
  errorCode,
  errorMessage,
}: SingleUrlDailyProps) => {
  return (
    <div className="daily-table-wrapper">
      <table>
        <thead>
          <tr>
            <th>{`${listIndex + 1} - CrUX Daily`}</th>
            <th>
              {errorCode
                ? `${formFactor === "PHONE" ? "MOBILE" : formFactor}`
                : `${formFactor === "PHONE" ? "MOBILE" : responseFormFactor}`}
            </th>
            <th className="daily-url">{errorCode ? data?.url : responseUrl}</th>
          </tr>
        </thead>
      </table>
      <table>
        <thead>
          <tr>
            <th>PERIODS</th>
            {errorCode ? (
              <ErrorCell
                errorStatus={errorCode ? `${errorCode} - ${errorMessage}` : ""}
              />
            ) : (
              <>
                <th className="header-cell-daily">{` 
          ${collectionPeriod?.lastDate?.day}/${collectionPeriod?.lastDate?.month}/${collectionPeriod?.lastDate?.year}
          ${collectionPeriod?.firstDate?.day}/${collectionPeriod?.firstDate?.month}/${collectionPeriod?.firstDate?.year}`}</th>
              </>
            )}
          </tr>
        </thead>
        {metrics === "cwv" ? (
          <tbody>
            <tr>
              <td>
                <b>CLS</b>
              </td>
              {errorCode ? (
                <ErrorCell
                  errorStatus={
                    errorCode ? `${errorCode} - ${errorMessage}` : ""
                  }
                />
              ) : (
                <td>{clsData}</td>
              )}
            </tr>
            <tr>
              <td>
                <b>LCP</b>
              </td>
              {errorCode ? (
                <ErrorCell
                  errorStatus={
                    errorCode ? `${errorCode} - ${errorMessage}` : ""
                  }
                />
              ) : (
                <td>
                  {lcpData}
                  {lcpData ? "ms" : ""}
                </td>
              )}
            </tr>
            <tr>
              <td>
                <b>TTFB</b>
              </td>
              {errorCode ? (
                <ErrorCell
                  errorStatus={
                    errorCode ? `${errorCode} - ${errorMessage}` : ""
                  }
                />
              ) : (
                <td>
                  {ttfbData}
                  {ttfbData ? "ms" : ""}
                </td>
              )}
            </tr>
            <tr>
              <td>
                <b>INP</b>
              </td>
              {errorCode ? (
                <ErrorCell
                  errorStatus={
                    errorCode ? `${errorCode} - ${errorMessage}` : ""
                  }
                />
              ) : (
                <td>
                  {inpData}
                  {inpData ? "ms" : ""}
                </td>
              )}
            </tr>
          </tbody>
        ) : (
          <tbody>
            {metrics === "cls" && (
              <tr>
                <td>
                  <b>CLS</b>
                </td>
                {errorCode ? (
                  <ErrorCell
                    errorStatus={
                      errorCode ? `${errorCode} - ${errorMessage}` : ""
                    }
                  />
                ) : (
                  <td>{clsData}</td>
                )}
              </tr>
            )}
            {metrics === "lcp" && (
              <tr>
                <td>
                  <b>LCP</b>
                </td>
                {errorCode ? (
                  <ErrorCell
                    errorStatus={
                      errorCode ? `${errorCode} - ${errorMessage}` : ""
                    }
                  />
                ) : (
                  <td>{lcpData}</td>
                )}
              </tr>
            )}
            {metrics === "ttfb" && (
              <tr>
                <td>
                  <b>TTFB</b>
                </td>
                {errorCode ? (
                  <ErrorCell
                    errorStatus={
                      errorCode ? `${errorCode} - ${errorMessage}` : ""
                    }
                  />
                ) : (
                  <td>{ttfbData}</td>
                )}
              </tr>
            )}
            {metrics === "inp" && (
              <tr>
                <td>
                  <b>INP</b>
                </td>
                {errorCode ? (
                  <ErrorCell
                    errorStatus={
                      errorCode ? `${errorCode} - ${errorMessage}` : ""
                    }
                  />
                ) : (
                  <td>{inpData}</td>
                )}
              </tr>
            )}
            {metrics === "lcp+ttfb" && (
              <>
                <tr>
                  <td>
                    <b>LCP</b>
                  </td>
                  {errorCode ? (
                    <ErrorCell
                      errorStatus={
                        errorCode ? `${errorCode} - ${errorMessage}` : ""
                      }
                    />
                  ) : (
                    <td>{lcpData}</td>
                  )}
                </tr>
                <tr>
                  <td>
                    <b>TTFB</b>
                  </td>
                  {errorCode ? (
                    <ErrorCell
                      errorStatus={
                        errorCode ? `${errorCode} - ${errorMessage}` : ""
                      }
                    />
                  ) : (
                    <td>{ttfbData}</td>
                  )}
                </tr>
              </>
            )}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default SingleUrlDaily;
