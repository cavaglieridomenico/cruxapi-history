type PercentileCellProps = { percentile: number; type: "cls" | "lcp" | "ttfb" };
const PercentileCell = ({ percentile, type }: PercentileCellProps) => {
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
  return <>{<td>{`${percentile}${percentile ? unit(type) : ""}`}</td>}</>;
};
export default PercentileCell;
