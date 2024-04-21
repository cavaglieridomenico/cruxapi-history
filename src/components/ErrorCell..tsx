type ErrorCellProps = {
  errorStatus: string | undefined;
};
const ErrorCell = ({ errorStatus }: ErrorCellProps) => {
  return <td>{`Status: ${errorStatus}`}</td>;
};

export default ErrorCell;
