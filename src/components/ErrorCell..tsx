type ErrorCellProps = {
  errorStatus: number;
};
const ErrorCell = (errorStatus: ErrorCellProps) => {
  return <td>{`Status: ${errorStatus}`}</td>;
};

export default ErrorCell;
