import { useState, useEffect, useRef, FormEvent } from "react";
import "./App.css";
import SingleUrlTable from "./components/SingleUrlTable";
import { getDisableTime, getMarketList } from "./utils/utils";
import SingleUrlDaily from "./components/SingleUrlDaily";
import { AllUrls, SingleUrl, useFetchData } from "./customHooks/useFetchData";
import PercentileRow from "./components/PercentileRow";

function App() {
  const { loading, currentUrl, timeoutCalls, allUrlsMobile, allUrlsDesktop } =
    useFetchData();

  const [render, setRender] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const selectMarket = useRef<HTMLSelectElement>(null!);
  const selectFormFactor = useRef<HTMLSelectElement>(null!);
  const selectMetrics = useRef<HTMLSelectElement>(null!);
  const selectApi = useRef<HTMLSelectElement>(null!);

  const [allUrlsMobileRender, setAllUrlsMobileRender] = useState<AllUrls>();
  const [allUrlsDesktopRender, setAllUrlsDesktopRender] = useState<AllUrls>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRender(false);
    setDisabled(true);

    setTimeout(() => {
      setRender(true);
      setDisabled(false);
    }, 500);
  };

  useEffect(() => {
    if (loading) return;
    setAllUrlsMobileRender(allUrlsMobile);
    setAllUrlsDesktopRender(allUrlsDesktop);
    setDisabled(false);
    console.log(allUrlsMobile);
    console.log(allUrlsDesktop);
  }, [loading]);

  const renderSingleUrltable = (urlList: SingleUrl[] | undefined) =>
    urlList
      ?.sort((a, b) => a.index - b.index)
      .map((urlData, index) => (
        <div className="url-table-wrapper" key={index}>
          {(selectApi?.current?.value === "daily" ||
            selectApi?.current?.value === "daily+history") && (
            <SingleUrlDaily
              data={urlData}
              formFactor={selectFormFactor?.current?.value}
              listIndex={index}
              collectionPeriod={urlData?.dailyData?.record?.collectionPeriod}
              clsData={
                urlData?.dailyData?.record?.metrics?.cumulative_layout_shift
                  ?.percentiles?.p75
              }
              lcpData={
                urlData?.dailyData?.record?.metrics?.largest_contentful_paint
                  ?.percentiles?.p75
              }
              ttfbData={
                urlData?.dailyData?.record?.metrics
                  ?.experimental_time_to_first_byte?.percentiles?.p75
              }
              inpData={
                urlData?.dailyData?.record?.metrics?.interaction_to_next_paint
                  ?.percentiles?.p75
              }
              metrics={selectMetrics.current.value}
              responseFormFactor={urlData?.dailyData?.record?.key?.formFactor}
              responseUrl={urlData?.dailyData?.record?.key?.url}
              errorCode={urlData?.dailyData?.error?.code}
              errorMessage={urlData?.dailyData?.error?.message}
              errorStatus={urlData?.dailyData?.error?.status}
            />
          )}
          {(selectApi?.current?.value === "history" ||
            selectApi?.current?.value === "daily+history") && (
            <SingleUrlTable
              data={urlData}
              listIndex={index}
              formFactor={selectFormFactor?.current?.value}
              collectionPeriods={urlData?.historyData?.record?.collectionPeriods?.reverse()}
              clsData={urlData?.historyData?.record?.metrics?.cumulative_layout_shift?.percentilesTimeseries?.p75s?.reverse()}
              lcpData={urlData?.historyData?.record?.metrics?.largest_contentful_paint?.percentilesTimeseries?.p75s?.reverse()}
              ttfbData={urlData?.historyData?.record?.metrics?.experimental_time_to_first_byte?.percentilesTimeseries?.p75s?.reverse()}
              inpData={urlData?.historyData?.record?.metrics?.interaction_to_next_paint?.percentilesTimeseries?.p75s?.reverse()}
              metrics={selectMetrics.current.value}
              responseFormFactor={urlData?.historyData?.record?.key?.formFactor}
              responseUrl={urlData?.historyData?.record?.key?.url}
              errorCode={urlData?.historyData?.error?.code}
              errorMessage={urlData?.historyData?.error?.message}
              errorStatus={urlData?.historyData?.error?.status}
            />
          )}
        </div>
      ));

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
      <div style={{ height: "50px", color: "grey" }}>
        {loading && (
          <span>
            Loading CrUX data... {currentUrl} Timeout: {timeoutCalls} sec
          </span>
        )}
      </div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <select
          ref={selectMarket}
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
        <select
          ref={selectApi}
          className="select"
          disabled={disabled}
          style={{ margin: "0 .3rem" }}
        >
          <option value="daily+history">DAILY + HISTORY</option>
          <option value="daily">DAILY</option>
          <option value="history">HISTORY</option>
        </select>
        <input type="submit" disabled={disabled} value="SHOW / REVERSE" />
      </form>
      {render &&
        selectFormFactor.current.value === "PHONE" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "homepages") && (
          <div className="template-name">
            <span>
              <b>HOMEPAGES</b>
            </span>
            {renderSingleUrltable(allUrlsMobileRender?.homepages)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "DESKTOP" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "homepages") && (
          <div>
            <span>
              <b>HOMEPAGES</b>
            </span>
            {renderSingleUrltable(allUrlsDesktopRender?.homepages)}
          </div>
        )}

      {render &&
        selectFormFactor.current.value === "PHONE" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "wp-it-plp") && (
          <div>
            <span>
              <b>WP IT - PLP</b>
            </span>
            {renderSingleUrltable(allUrlsMobileRender?.wpitPlp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "DESKTOP" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "wp-it-plp") && (
          <div>
            <span>
              <b>WP IT - PLP</b>
            </span>
            {renderSingleUrltable(allUrlsDesktopRender?.wpitPlp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "PHONE" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "wp-it-pdp") && (
          <div>
            <span>
              <b>WP IT - PDP</b>
            </span>
            {renderSingleUrltable(allUrlsMobileRender?.wpitPdp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "DESKTOP" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "wp-it-pdp") && (
          <div>
            <span>
              <b>WP IT - PDP</b>
            </span>
            {renderSingleUrltable(allUrlsDesktopRender?.wpitPdp)}
          </div>
        )}

      {render &&
        selectFormFactor.current.value === "PHONE" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "wp-pl-plp") && (
          <div>
            <span>
              <b>WP PL - PLP</b>
            </span>
            {renderSingleUrltable(allUrlsMobileRender?.wpplPlp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "DESKTOP" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "wp-pl-plp") && (
          <div>
            <span>
              <b>WP PL - PLP</b>
            </span>
            {renderSingleUrltable(allUrlsDesktopRender?.wpplPlp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "PHONE" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "wp-pl-pdp") && (
          <div>
            <span>
              <b>WP PL - PDP</b>
            </span>
            {renderSingleUrltable(allUrlsMobileRender?.wpplPdp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "DESKTOP" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "wp-pl-pdp") && (
          <div>
            <span>
              <b>WP PL - PDP</b>
            </span>
            {renderSingleUrltable(allUrlsDesktopRender?.wpplPdp)}
          </div>
        )}

      {render &&
        selectFormFactor.current.value === "PHONE" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "wp-fr-plp") && (
          <div>
            <span>
              <b>WP FR - PLP</b>
            </span>
            {renderSingleUrltable(allUrlsMobileRender?.wpfrPlp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "DESKTOP" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "wp-fr-plp") && (
          <div>
            <span>
              <b>WP FR - PLP</b>
            </span>
            {renderSingleUrltable(allUrlsDesktopRender?.wpfrPlp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "PHONE" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "wp-fr-pdp") && (
          <div>
            <span>
              <b>WP FR - PDP</b>
            </span>
            {renderSingleUrltable(allUrlsMobileRender?.wpfrPdp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "DESKTOP" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "wp-fr-pdp") && (
          <div>
            <span>
              <b>WP FR - PDP</b>
            </span>
            {renderSingleUrltable(allUrlsDesktopRender?.wpfrPdp)}
          </div>
        )}

      {render &&
        selectFormFactor.current.value === "PHONE" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "bk-de-plp") && (
          <div>
            <span>
              <b>BK DE - PLP</b>
            </span>
            {renderSingleUrltable(allUrlsMobileRender?.bkdePlp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "DESKTOP" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "bk-de-plp") && (
          <div>
            <span>
              <b>BK DE - PLP</b>
            </span>
            {renderSingleUrltable(allUrlsDesktopRender?.bkdePlp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "PHONE" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "bk-de-pdp") && (
          <div>
            <span>
              <b>BK DE - PDP</b>
            </span>
            {renderSingleUrltable(allUrlsMobileRender?.bkdePdp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "DESKTOP" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "bk-de-pdp") && (
          <div>
            <span>
              <b>BK DE - PDP</b>
            </span>
            {renderSingleUrltable(allUrlsDesktopRender?.bkdePdp)}
          </div>
        )}

      {render &&
        selectFormFactor.current.value === "PHONE" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "hp-it-plp") && (
          <div>
            <span>
              <b>HP IT - PLP</b>
            </span>
            {renderSingleUrltable(allUrlsMobileRender?.hpitPlp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "DESKTOP" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "hp-it-plp") && (
          <div>
            <span>
              <b>HP IT - PLP</b>
            </span>
            {renderSingleUrltable(allUrlsDesktopRender?.hpitPlp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "PHONE" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "hp-it-pdp") && (
          <div>
            <span>
              <b>HP IT - PDP</b>
            </span>
            {renderSingleUrltable(allUrlsMobileRender?.hpitPdp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "DESKTOP" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "hp-it-pdp") && (
          <div>
            <span>
              <b>HP IT - PDP</b>
            </span>
            {renderSingleUrltable(allUrlsDesktopRender?.hpitPdp)}
          </div>
        )}

      {render &&
        selectFormFactor.current.value === "PHONE" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "hp-uk-plp") && (
          <div>
            <span>
              <b>HP UK - PLP</b>
            </span>
            {renderSingleUrltable(allUrlsMobileRender?.hpukPlp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "DESKTOP" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "hp-uk-plp") && (
          <div>
            <span>
              <b>HP UK - PLP</b>
            </span>
            {renderSingleUrltable(allUrlsDesktopRender?.hpukPlp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "PHONE" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "hp-uk-pdp") && (
          <div>
            <span>
              <b>HP UK - PDP</b>
            </span>
            {renderSingleUrltable(allUrlsMobileRender?.hpukPdp)}
          </div>
        )}
      {render &&
        selectFormFactor.current.value === "DESKTOP" &&
        (selectMarket?.current?.value === "all" ||
          selectMarket?.current?.value === "hp-uk-pdp") && (
          <div>
            <span>
              <b>HP UK - PDP</b>
            </span>
            {renderSingleUrltable(allUrlsDesktopRender?.hpukPdp)}
          </div>
        )}
    </>
  );
}

export default App;
