import ErrorCell from "./ErrorCell.";

type PercentileRowProps = {
  percentileList: number[] | string[] | undefined | null;
  type: "cls" | "lcp" | "ttfb" | "inp";
  errorStatus: string | undefined;
};

const PercentileRow = ({
  percentileList,
  type,
  errorStatus,
}: PercentileRowProps) => {
  const unit = (type: string) => {
    switch (type) {
      case "cls":
        return "";
      case "lcp":
        return "ms";
      case "ttfb":
        return "ms";
      case "inp":
        return "ms";
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
              percentileItem ? unit(type) : ""
            }`}</td>
          );
        })
      )}
    </tr>
  );
};

export default PercentileRow;
