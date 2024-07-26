import { useState, useEffect } from "react";
import "./App.css";
import SingleUrlTable from "./components/SingleUrlTable";
import { getDisableTime, getMarketList } from "./utils/utils";
import SingleUrlDaily from "./components/SingleUrlDaily";
import { AllUrl, useFetchData } from "./customHooks/useFetchData";
import PercentileRow from "./components/PercentileRow";

function App() {
  const { loading, allUrlsMobile, allUrlsDesktop } = useFetchData();

  const [render, setRender] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const [selectMarket, setSelectMarket] = useState("all");
  const [selectFormFactor, setSelectFormFactor] = useState("PHONE");

  const [allUrlsMobileRender, setAllUrlMobileRender] = useState<AllUrl | []>(
    []
  );
  const [allUrlsDesktopRender, setAllUrlDesktopRender] = useState<AllUrl | []>(
    []
  );

  useEffect(() => {
    if (loading) return;
    setAllUrlMobileRender(allUrlsMobile);
    setAllUrlDesktopRender(allUrlsDesktop);
    setRender(true);
    setDisabled(false);
    console.log(allUrlsMobile, allUrlsDesktop);
  }, [loading]);

  useEffect(() => {}, [selectFormFactor, selectMarket]);

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
      <form>
        <select
          onChange={(event) => setSelectMarket(event.target.value)}
          className="select"
          disabled={disabled}
          style={{ margin: "0 .3rem" }}
        >
          <option value="all">All</option>
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
          onChange={(event) => setSelectFormFactor(event.target.value)}
          className="select"
          disabled={disabled}
          style={{ margin: "0 .3rem" }}
        >
          <option value="PHONE">MOBILE</option>
          <option value="DESKTOP">DESKTOP</option>
        </select>
      </form>
      <div>{loading && <p>Loading...</p>}</div>
      {render &&
        selectFormFactor === "PHONE" &&
        (selectMarket === "all" || selectMarket === "homepages") &&
        allUrlsMobileRender.homepages
          .sort((a, b) => a.index - b.index)
          .map((urlData, index) => (
            <div className="url-table-wrapper" key={index}>
              <SingleUrlTable
                data={urlData}
                listIndex={index}
                formFactor="PHONE"
              />
            </div>
          ))}

      {render &&
        selectFormFactor === "PHONE" &&
        (selectMarket === "all" || selectMarket === "wp-it-plp") &&
        allUrlsMobile.wpitPlp
          .sort((a, b) => a.index - b.index)
          .map((urlData, index) => (
            <div className="url-table-wrapper" key={index}>
              <SingleUrlTable
                data={urlData}
                listIndex={index}
                formFactor="PHONE"
              />
            </div>
          ))}
      {render &&
        selectFormFactor === "PHONE" &&
        (selectMarket === "all" || selectMarket === "wp-pl-plp") &&
        allUrlsMobile.wpplPlp
          .sort((a, b) => a.index - b.index)
          .map((urlData, index) => (
            <div className="url-table-wrapper" key={index}>
              <SingleUrlTable
                data={urlData}
                listIndex={index}
                formFactor="PHONE"
              />
            </div>
          ))}
      {render &&
        selectFormFactor === "PHONE" &&
        (selectMarket === "all" || selectMarket === "wp-fr-plp") &&
        allUrlsMobile.wpfrPlp
          .sort((a, b) => a.index - b.index)
          .map((urlData, index) => (
            <div className="url-table-wrapper" key={index}>
              <SingleUrlTable
                data={urlData}
                listIndex={index}
                formFactor="PHONE"
              />
            </div>
          ))}
      {render &&
        selectFormFactor === "PHONE" &&
        (selectMarket === "all" || selectMarket === "bk-de-plp") &&
        allUrlsMobile.bkdePlp
          .sort((a, b) => a.index - b.index)
          .map((urlData, index) => (
            <div className="url-table-wrapper" key={index}>
              <SingleUrlTable
                data={urlData}
                listIndex={index}
                formFactor="PHONE"
              />
            </div>
          ))}
      {render &&
        selectFormFactor === "PHONE" &&
        (selectMarket === "all" || selectMarket === "hp-it-plp") &&
        allUrlsMobile.hpitPlp
          .sort((a, b) => a.index - b.index)
          .map((urlData, index) => (
            <div className="url-table-wrapper" key={index}>
              <SingleUrlTable
                data={urlData}
                listIndex={index}
                formFactor="PHONE"
              />
            </div>
          ))}
      {render &&
        selectFormFactor === "PHONE" &&
        (selectMarket === "all" || selectMarket === "hp-uk-plp") &&
        allUrlsMobile.hpukPlp
          .sort((a, b) => a.index - b.index)
          .map((urlData, index) => (
            <div className="url-table-wrapper" key={index}>
              <SingleUrlTable
                data={urlData}
                listIndex={index}
                formFactor="PHONE"
              />
            </div>
          ))}
      {render &&
        selectFormFactor === "DESKTOP" &&
        (selectMarket === "all" || selectMarket === "homepages") &&
        allUrlsDesktopRender.homepages
          .sort((a, b) => a.index - b.index)
          .map((urlData, index) => (
            <div className="url-table-wrapper" key={index}>
              <SingleUrlTable
                data={urlData}
                listIndex={index}
                formFactor="DESKTOP"
              />
            </div>
          ))}
      {render &&
        selectFormFactor === "DESKTOP" &&
        (selectMarket === "all" || selectMarket === "wp-it-plp") &&
        allUrlsDesktop.wpitPlp
          .sort((a, b) => a.index - b.index)
          .map((urlData, index) => (
            <div className="url-table-wrapper" key={index}>
              <SingleUrlTable
                data={urlData}
                listIndex={index}
                formFactor="DESKTOP"
              />
            </div>
          ))}
      {render &&
        selectFormFactor === "DESKTOP" &&
        (selectMarket === "all" || selectMarket === "wp-pl-plp") &&
        allUrlsDesktop.wpplPlp
          .sort((a, b) => a.index - b.index)
          .map((urlData, index) => (
            <div className="url-table-wrapper" key={index}>
              <SingleUrlTable
                data={urlData}
                listIndex={index}
                formFactor="DESKTOP"
              />
            </div>
          ))}
      {render &&
        selectFormFactor === "DESKTOP" &&
        (selectMarket === "all" || selectMarket === "wp-fr-plp") &&
        allUrlsDesktop.wpfrPlp
          .sort((a, b) => a.index - b.index)
          .map((urlData, index) => (
            <div className="url-table-wrapper" key={index}>
              <SingleUrlTable
                data={urlData}
                listIndex={index}
                formFactor="DESKTOP"
              />
            </div>
          ))}
      {render &&
        selectFormFactor === "DESKTOP" &&
        (selectMarket === "all" || selectMarket === "bk-de-plp") &&
        allUrlsDesktop.bkdePlp
          .sort((a, b) => a.index - b.index)
          .map((urlData, index) => (
            <div className="url-table-wrapper" key={index}>
              <SingleUrlTable
                data={urlData}
                listIndex={index}
                formFactor="DESKTOP"
              />
            </div>
          ))}
      {render &&
        selectFormFactor === "DESKTOP" &&
        (selectMarket === "all" || selectMarket === "hp-it-plp") &&
        allUrlsDesktop.hpitPlp
          .sort((a, b) => a.index - b.index)
          .map((urlData, index) => (
            <div className="url-table-wrapper" key={index}>
              <SingleUrlTable
                data={urlData}
                listIndex={index}
                formFactor="DESKTOP"
              />
            </div>
          ))}
      {render &&
        selectFormFactor === "DESKTOP" &&
        (selectMarket === "all" || selectMarket === "hp-uk-plp") &&
        allUrlsDesktop.hpukPlp
          .sort((a, b) => a.index - b.index)
          .map((urlData, index) => (
            <div className="url-table-wrapper" key={index}>
              <SingleUrlTable
                data={urlData}
                listIndex={index}
                formFactor="DESKTOP"
              />
            </div>
          ))}
    </>
  );
}

export default App;
