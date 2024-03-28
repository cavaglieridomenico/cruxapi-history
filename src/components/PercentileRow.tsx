import PercentileCell from "./PercentileCell";

type PercentileRowProps = {
  list: [];
  type: "cls" | "lcp" | "ttfb";
};

const PercentileRow = ({ list, type }: PercentileRowProps) => {
  return (
    <tr>
      <td>{type.toUpperCase()}</td>
      {list?.map((percentileItem, index) => {
        return (
          <PercentileCell
            percentile={percentileItem}
            type={type}
            keyProp={index}
          />
        );
      })}
    </tr>
  );
};

export default PercentileRow;
