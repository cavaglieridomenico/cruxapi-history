import { useState, useEffect, useRef, FormEvent } from "react";
import "./App.css";
import { getDisableTime, getMarketList } from "./utils/utils";
import SingleUrlTableValuesOnly from "./components/SingleUrlOnlyTableOneValue";
import SingleUrlDaily from "./components/SingleUrlDaily";
import SingleUrlTable from "./components/SingleUrlTable";

function App() {
  const [selectMarketList, setSelectMarketList] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [updateUrls, setUpdateUrls] = useState(false);
  const [render, setRender] = useState(false);

  const selectMarket = useRef<HTMLSelectElement>(null!);
  const selectFormFactor = useRef<HTMLSelectElement>(null!);
  const selectMetrics = useRef<HTMLSelectElement>(null!);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUpdateUrls(true);
    setRender(true);
  };
  useEffect(() => {
    if (!updateUrls) return;
    setSelectMarketList([]);
    setDisabled(true);
    const setSelectDisabled = setTimeout(() => {
      setDisabled(false);
      setUpdateUrls(false);
    }, getDisableTime(selectMarket.current.value));
    const setNewMarketList = setTimeout(
      () => setSelectMarketList(getMarketList(selectMarket.current.value)),
      1000
    );

    return () => {
      clearTimeout(setSelectDisabled);
      clearTimeout(setNewMarketList);
    };
  }, [updateUrls]);

  return (
    <>
      <div className={`loader ${disabled ? "skeleton" : ""}`}></div>
      <h1>CrUX History API</h1>
      <p>
        CrUX History: Weekly historical data is released every Monday,
        containing the 25 most recent 28 day collection periods that end on
        Saturdays.
      </p>
      <p>
        CrUX Daily Average: 28-day rolling average data is updated daily, based
        on the aggregated data from the previous 28 days.
      </p>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="form-container"
      >
        <select
          ref={selectMarket}
          className="select"
          disabled={disabled}
          style={{ margin: "0 .3rem" }}
        >
          <option value="homepages">Homepages</option>
          <option value="wp-it-plp">WP IT - PLP</option>
          <option value="wp-it-pdp">WP IT - PDP</option>
          <option value="wp-pl-plp">WP PL - PLP</option>
          <option value="wp-pl-pdp">WP PL - PDP</option>
          <option value="wp-fr-plp">WP FR - PLP</option>
          <option value="wp-fr-pdp">WP FR - PDP</option>
          <option value="bk-de-plp">BK DE - PLP</option>
          <option value="bk-de-pdp">BK DE - PDP</option>
          <option value="hp-it-plp">HP IT - PLP</option>
          <option value="hp-it-pdp">HP IT - PDP</option>
          <option value="hp-uk-plp">HP UK - PLP</option>
          <option value="hp-uk-pdp">HP UK - PDP</option>
        </select>
        <select
          ref={selectFormFactor}
          className="select"
          disabled={disabled}
          style={{ margin: "0 .3rem" }}
        >
          <option value="PHONE">MOBILE</option>
          <option value="DESKTOP">DESKTOP</option>
        </select>
        <select
          ref={selectMetrics}
          className="select"
          disabled={disabled}
          style={{ margin: "0 .3rem" }}
        >
          <option value="cwv">CWV</option>
          <option value="cls">CLS</option>
          <option value="lcp">LCP</option>
          <option value="ttfb">TTFB</option>
          <option value="inp">INP</option>
        </select>
        <input type="submit" disabled={disabled} value="SEND" />
      </form>
      {render &&
        selectMetrics.current.value === "cwv" &&
        selectMarketList.map((url, index) => (
          <div className="url-table-wrapper" key={index}>
            <SingleUrlDaily
              url={url}
              formFactor={selectFormFactor.current.value}
              apiKey={import.meta.env.VITE_API_KEY}
              listIndex={index}
              history={false}
            />
            <SingleUrlTable
              url={url}
              formFactor={selectFormFactor.current.value}
              apiKey={import.meta.env.VITE_API_KEY}
              listIndex={index}
            />
          </div>
        ))}
      {render &&
        selectMetrics.current.value !== "cwv" &&
        selectMarketList.map((url, index) => (
          <SingleUrlTableValuesOnly
            url={url}
            formFactor={selectFormFactor.current.value}
            apiKey={import.meta.env.VITE_API_KEY}
            listIndex={index}
            metrics={selectMetrics.current.value}
          />
        ))}
    </>
  );
}

export default App;
