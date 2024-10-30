import { useFetchData } from "../customHooks/useFetchData";
import DailyAndHistoryTable from "./DailyAndHistoryTable";

function FetchDataDailyAndHistoryTable() {
  const { loading, currentUrl, timeoutCalls, allUrlsMobile, allUrlsDesktop } =
    useFetchData();

  return (
    <DailyAndHistoryTable
      loading={loading}
      allUrlsMobile={allUrlsMobile}
      allUrlsDesktop={allUrlsDesktop}
      timeoutCalls={timeoutCalls}
      currentUrl={currentUrl}
    />
  );
}

export default FetchDataDailyAndHistoryTable;
