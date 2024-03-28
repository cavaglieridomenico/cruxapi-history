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
  const [apiKey, setApiKey] = useState("");
  const [show, setShow] = useState(false);
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
        <input
          onChange={(e) => setApiKey(e.target.value)}
          type="text"
          placeholder="Google Api Key"
          className="input-api-key"
        />
        <select
          value={selectMarket}
          onChange={(event) => {
            setSelectMarket(event.target.value);
            setShow(false);
          }}
          style={{ margin: "0 .3rem" }}
        >
          <option value="bk-de">BK DE</option>
          <option value="wp-it">WP IT</option>
          <option value="wp-pl">WP PL</option>
          <option value="wp-fr">WP FR</option>
          <option value="hp-it">HP IT</option>
          <option value="hp-uk">HP UK</option>
        </select>
        <button disabled={apiKey === ""} onClick={() => setShow(true)}>
          GO
        </button>
      </div>
      {show &&
        getMarkrtList(selectMarket).map((url, index) => (
          <SingleUrlTable url={url} apiKey={apiKey} keyProp={index + 1} />
        ))}
    </>
  );
}

export default App;
