import { useFetch } from "../customHooks/useFetch";
import PercentileRow from "./PercentileRow";
import TableHeaderCell from "./TableHeaderCell";

type SinglrUrlTableProps = {
  url: string;
  apiKey: string;
};

const SingleUrlTable = ({ url, apiKey }: SinglrUrlTableProps) => {
  const data: any = useFetch(url, apiKey);
  const record = data?.record;
  const collectionPeriods: CollectionPeriod[] = data?.record?.collectionPeriods;
  const clsData: [] =
    data?.record?.metrics?.cumulative_layout_shift?.percentilesTimeseries?.p75s;
  const lcpData: [] =
    data?.record?.metrics?.largest_contentful_paint?.percentilesTimeseries
      ?.p75s;
  const ttfbData: [] =
    data?.record?.metrics?.experimental_time_to_first_byte
      ?.percentilesTimeseries?.p75s;

  return (
    <div className="wrapper">
      <p>{record?.key?.url}</p>
      <table>
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
        <PercentileRow list={clsData} type="cls" />
        <PercentileRow list={lcpData} type="lcp" />
        <PercentileRow list={ttfbData} type="ttfb" />
      </table>
    </div>
  );
};

export default SingleUrlTable;
