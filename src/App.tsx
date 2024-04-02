import { useState } from "react";
import "./App.css";
import SingleUrlTable from "./components/SingleUrlTable";
import {
  urlListBkde,
  urlListWpit,
  urlListWppl,
  urlListWpfr,
  urlListHpit,
  urlListHpuk,
} from "./utils/urlList";

function App() {
  const [selectMarket, setSelectMarket] = useState("bk-de");
  const getMarkrtList = (market: string) => {
    switch (market) {
      case "bk-de":
        return urlListBkde;
      case "wp-it":
        return urlListWpit;
      case "wp-pl":
        return urlListWppl;
      case "wp-fr":
        return urlListWpfr;
      case "hp-it":
        return urlListHpit;
      case "hp-uk":
        return urlListHpuk;
      default:
        return urlListBkde;
    }
  };

  return (
    <>
      <h1>CrUX History API</h1>
      <div>
        <select
          className="select-market"
          value={selectMarket}
          onChange={(event) => {
            setSelectMarket(event.target.value);
          }}
          style={{ margin: "0 .3rem" }}
        >
          <option value="bk-de">BK DE - mobile</option>
          <option value="wp-it">WP IT - mobile</option>
          <option value="wp-pl">WP PL - mobile</option>
          <option value="wp-fr">WP FR - mobile</option>
          <option value="hp-it">HP IT - mobile</option>
          <option value="hp-uk">HP UK - mobile</option>
        </select>
      </div>
      {getMarkrtList(selectMarket).map((url, index) => (
        <div key={index}>
          <SingleUrlTable url={url} apiKey={import.meta.env.VITE_API_KEY} />
        </div>
      ))}
    </>
  );
}

export default App;
