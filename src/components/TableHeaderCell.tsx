const TableHeaderCell = (
  { firstDate, lastDate }: CollectionPeriod,
  keyProp: number
) => {
  return (
    <>
      <th key={keyProp}>{`${firstDate.day}/${firstDate.month}/${firstDate.year}
             ${lastDate.day}/${lastDate.month}/${lastDate.year}`}</th>
    </>
  );
};
export default TableHeaderCell;
