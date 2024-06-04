import { useState, useEffect, useRef, FormEvent } from "react";
import "./App.css";
import SingleUrlTable from "./components/SingleUrlTable";
import { getMarketList } from "./utils/utils";
import SingleUrlDaily from "./components/SingleUrlDaily";

function App() {
  const [selectMarket, setSelectMarket] = useState("homepages");
  const [selectMarketList, setSelectMarketList] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [updateUrls, setUpdateUrls] = useState(false);
  const [render, setRender] = useState(false);

  const selectFormFactor = useRef<HTMLSelectElement>(null!);

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
    }, 6000);
    setSelectMarketList(getMarketList(selectMarket));
    setRender(true);

    return () => {
      clearTimeout(setSelectDisabled);
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
      <form onSubmit={(event) => handleSubmit(event)}>
        <select
          className="select"
          value={selectMarket}
          disabled={disabled}
          onChange={(event) => {
            setSelectMarket(event.target.value);
          }}
          style={{ margin: "0 .3rem" }}
        >
          <option value="homapages">Homepages</option>
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
        <input type="submit" disabled={disabled} value="SEND" />
      </form>
      {render &&
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
    </>
  );
}

export default App;
