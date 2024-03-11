type PercentileCellProps = { percentile: number };
const PercentileCell = ({ percentile }: PercentileCellProps) => {
  return <>{<td>{`${percentile}${percentile ? "ms" : ""}`}</td>}</>;
};
export default PercentileCell;
