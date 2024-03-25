import PercentileCell from "./PercentileCell";

type PercentileRowProps = {
  list: [];
  type: "cls" | "lcp" | "ttfb";
};

const PercentileRow = ({ list, type }: PercentileRowProps) => {
  return (
    <tr>
      <td>{type.toUpperCase()}</td>
      {list?.map((percentileItem) => {
        return <PercentileCell percentile={percentileItem} type={type} />;
      })}
    </tr>
  );
};

export default PercentileRow;
