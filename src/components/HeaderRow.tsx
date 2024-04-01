import { CollectionPeriodsEntity } from "../types/types";
import ErrorCell from "./ErrorCell.";

type HeaderRowProps = {
  periodList: CollectionPeriodsEntity[] | null | undefined;
  errorStatus: number;
};

const HeaderRow = ({ periodList, errorStatus }: HeaderRowProps) => {
  return (
    <tr>
      <td>PERIODS</td>
      {errorStatus ? (
        <ErrorCell errorStatus={errorStatus} />
      ) : (
        periodList?.map((period, index) => (
          <th
            key={index}
          >{`${period?.firstDate?.day}/${period?.firstDate?.month}/${period?.firstDate?.year} 
          ${period?.lastDate?.day}/${period?.lastDate?.month}/${period?.lastDate?.year}`}</th>
        ))
      )}
    </tr>
  );
};
export default HeaderRow;
