import ErrorCell from "./ErrorCell.";

type PercentileRowProps = {
  percentileList: number[] | string[] | undefined | null;
  type: "cwv" | "cls" | "lcp" | "ttfb" | "inp";
  errorStatus: string | undefined;
  isOnlyOneValue?: boolean;
};

const PercentileRow = ({
  percentileList,
  type,
  errorStatus,
  isOnlyOneValue,
}: PercentileRowProps) => {
  const unit = (type: string) => {
    switch (type) {
      case "lcp":
        return "ms";
      case "ttfb":
        return "ms";
      case "inp":
        return "ms";
      default:
        return "no-unit";
    }
  };
  return (
    <tr>
      <td>
        <b>{type.toUpperCase()}</b>
      </td>
      {errorStatus ? (
        <ErrorCell errorStatus={errorStatus} />
      ) : (
        percentileList?.map((percentileItem, index) => {
          return (
            <td key={index}>{`${percentileItem}${
              percentileItem && unit(type) !== "no-unit" && !isOnlyOneValue
                ? unit(type)
                : ""
            }`}</td>
          );
        })
      )}
    </tr>
  );
};

export default PercentileRow;
