type PercentileCellProps = {
  percentile: number;
  type: "cls" | "lcp" | "ttfb";
  keyProp: number;
};
const PercentileCell = ({ percentile, type, keyProp }: PercentileCellProps) => {
  const unit = (type: string) => {
    switch (type) {
      case "cls":
        return "";
      case "lcp":
        return "ms";
      case "ttfb":
        return "ms";
    }
  };
  return (
    <>
      {<td key={keyProp}>{`${percentile}${percentile ? unit(type) : ""}`}</td>}
    </>
  );
};
export default PercentileCell;
