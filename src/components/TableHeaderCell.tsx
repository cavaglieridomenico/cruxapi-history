type TableHeaderCellProps = CollectionPeriod;
const TableHeaderCell = ({ firstDate, lastDate }: TableHeaderCellProps) => {
  return (
    <>
      <th>{`${firstDate.day}/${firstDate.month}/${firstDate.year}
             ${lastDate.day}/${lastDate.month}/${lastDate.year}`}</th>
    </>
  );
};
export default TableHeaderCell;
