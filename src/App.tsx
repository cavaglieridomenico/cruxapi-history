import { useState } from "react";
import "./App.css";
import DailyAndHistoryTable from "./components/DailyAndHistoryTable";
import FetchDataDailyAndHistoryTable from "./components/FetchDataDailyAndHistoryTable";

function App() {
  const [renderLocalData, setRenderLocalData] = useState(false);
  const [startFetching, setStartFetching] = useState(false);

  const getLocalStorageData = (displayData: string) => {
    const localStorageData = localStorage.getItem(displayData);

    if (localStorageData) {
      return JSON.parse(window.localStorage.getItem(displayData) || "");
    } else {
      return null;
    }
  };

  if (
    getLocalStorageData("allUrlsMobile") &&
    getLocalStorageData("allUrlsDesktop") &&
    !renderLocalData &&
    !startFetching
  )
    return (
      <div className="start-button-container">
        <button
          onClick={() => setRenderLocalData(true)}
          className="start-button"
        >
          Use local data
        </button>
        <button
          style={{ marginTop: "20px" }}
          onClick={() => setStartFetching(true)}
          className="start-button"
        >
          Start fetching data
        </button>
      </div>
    );

  if (
    getLocalStorageData("allUrlsMobile") &&
    getLocalStorageData("allUrlsDesktop") &&
    renderLocalData
  )
    return (
      <DailyAndHistoryTable
        loading={false}
        allUrlsMobile={getLocalStorageData("allUrlsMobile")}
        allUrlsDesktop={getLocalStorageData("allUrlsDesktop")}
        timeoutCalls={0}
        currentUrl={""}
      />
    );

  if (!startFetching) {
    return (
      <div className="start-button-container">
        <button onClick={() => setStartFetching(true)} className="start-button">
          Start fetching data
        </button>
      </div>
    );
  }
  return <FetchDataDailyAndHistoryTable />;
}

export default App;
