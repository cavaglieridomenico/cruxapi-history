import { CollectionPeriodsEntity } from "../types/types";
import ErrorCell from "./ErrorCell.";

type HeaderRowProps = {
  periodList: CollectionPeriodsEntity[] | null | undefined;
  errorStatus: string | undefined;
};

const HeaderRow = ({ periodList, errorStatus }: HeaderRowProps) => {
  return (
    <tr>
      <th className="header-first-cell">PERIODS</th>
      {errorStatus ? (
        <ErrorCell errorStatus={errorStatus} />
      ) : (
        periodList?.map((period, index) => (
          <th key={index}>{` 
          ${period?.lastDate?.day}/${period?.lastDate?.month}/${period?.lastDate?.year}
          ${period?.firstDate?.day}/${period?.firstDate?.month}/${period?.firstDate?.year}`}</th>
        ))
      )}
    </tr>
  );
};
export default HeaderRow;
