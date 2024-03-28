import { useEffect, useState } from "react";
import { useFetch } from "../customHooks/useFetch";
import PercentileRow from "./PercentileRow";
import TableHeaderCell from "./TableHeaderCell";

type SinglrUrlTableProps = {
  url: string;
  apiKey: string;
  keyProp: number;
};

const SingleUrlTable = ({ url, apiKey, keyProp }: SinglrUrlTableProps) => {
  const [show, setShow] = useState(false);
  const [collectionPeriods, setCollectionPeriod] = useState();
  const [clsData, setClsData] = useState();
  const [lcpData, setLcpData] = useState();
  const [ttfbData, setTtfbData] = useState();
  const data: any = useFetch(url, apiKey);

  useEffect(() => {
    if (!data) return;
    setCollectionPeriod(data?.record?.collectionPeriods.reverse());
    setClsData(
      data?.record?.metrics?.cumulative_layout_shift?.percentilesTimeseries?.p75s?.reverse()
    );
    setLcpData(
      data?.record?.metrics?.largest_contentful_paint?.percentilesTimeseries?.p75s?.reverse()
    );
    setTtfbData(
      data?.record?.metrics?.experimental_time_to_first_byte?.percentilesTimeseries?.p75s?.reverse()
    );
    setShow(true);
  }, [data]);

  const record = data?.record;
  const responseUrl = record?.key?.url;

  return (
    <div className="wrapper" key={keyProp}>
      {!show && <p>Loading...</p>}
      {show && (
        <>
          <p>{responseUrl ? responseUrl : `404 - ${url}`}</p>
          <table>
            <thead>
              <tr>
                <th className="col-1">PERIODS</th>
                {collectionPeriods?.map((period, index) => (
                  <TableHeaderCell
                    key={index}
                    firstDate={period?.firstDate}
                    lastDate={period?.lastDate}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              <PercentileRow list={clsData} type="cls" />
              <PercentileRow list={lcpData} type="lcp" />
              <PercentileRow list={ttfbData} type="ttfb" />
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default SingleUrlTable;
