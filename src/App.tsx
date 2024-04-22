import { useState, useEffect } from "react";
import "./App.css";
import SingleUrlTable from "./components/SingleUrlTable";
import { getMarkrtList } from "./utils/utils";
import { urlListWpitPdp } from "./utils/urlList";

function App() {
  const [selectMarket, setSelectMarket] = useState("wp-it");
  const [selectFormFactor, setSelectFormFactor] = useState("PHONE");
  const [selectMarketList, setSelectMarketList] = useState(urlListWpitPdp);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setSelectMarketList([]);
    setDisabled(true);
    const setSelectDisabled = setTimeout(() => setDisabled(false), 6000);
    const generateUrlList = setTimeout(
      () => setSelectMarketList(getMarkrtList(selectMarket)),
      1000
    );
    return () => {
      clearTimeout(generateUrlList);
      clearTimeout(setSelectDisabled);
    };
  }, [selectMarket, selectFormFactor]);

  return (
    <>
      <div className={`loader ${disabled ? "skeleton" : ""}`}></div>
      <h1>CrUX History API</h1>
      <p>
        Weekly historical data is released every Monday, containing the 25 most
        recent 28 day collection periods that end on Saturdays.
      </p>
      <div>
        <select
          className="select"
          value={selectMarket}
          disabled={disabled}
          onChange={(event) => {
            setSelectMarket(event.target.value);
          }}
          style={{ margin: "0 .3rem" }}
        >
          <option value="wp-it">WP IT - PDP</option>
          <option value="wp-pl">WP PL - PDP</option>
          <option value="wp-fr">WP FR - PDP</option>
          <option value="bk-de">BK DE - PDP</option>
          <option value="hp-it">HP IT - PDP</option>
          <option value="hp-uk">HP UK - PDP</option>
        </select>
        <select
          className="select"
          value={selectFormFactor}
          disabled={disabled}
          onChange={(event) => {
            setSelectFormFactor(event.target.value);
          }}
          style={{ margin: "0 .3rem" }}
        >
          <option value="PHONE">MOBILE</option>
          <option value="DESKTOP">DESKTOP</option>
        </select>
      </div>
      {selectMarketList.map((url, index) => (
        <div key={index}>
          <SingleUrlTable
            url={url}
            formFactor={selectFormFactor}
            apiKey={import.meta.env.VITE_API_KEY}
            listIndex={index}
          />
        </div>
      ))}
    </>
  );
}

export default App;
