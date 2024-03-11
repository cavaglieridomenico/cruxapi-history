type DensityCellProps = { densities: number[] | "NaN"[] };
const DensityCell = ({ densities }: DensityCellProps) => {
  return (
    <>
      {densities &&
        densities.map((densityIItem, index) => (
          <td key={index}>
            {densityIItem !== "NaN"
              ? `${(densityIItem * 100).toFixed(2)}%`
              : densityIItem}
          </td>
        ))}
    </>
  );
};
export default DensityCell;
