import { useState, useEffect } from "react";
import { getMarketList } from "../utils/utils";
import fetchData from "../utils/fetchData";
import type { CruxApi, CruxHistoryApi } from "../types/types";

export type SingleUrl = {
  index: number;
  url: string;
  dailyData: CruxApi;
  historyData: CruxHistoryApi;
};
export type AllUrls = {
  homepages: SingleUrl[];
  wpitPlp: SingleUrl[];
  wpplPlp: SingleUrl[];
  wpfrPlp: SingleUrl[];
  bkdePlp: SingleUrl[];
  hpitPlp: SingleUrl[];
  hpukPlp: SingleUrl[];
  wpitPdp: SingleUrl[];
  wpplPdp: SingleUrl[];
  wpfrPdp: SingleUrl[];
  bkdePdp: SingleUrl[];
  hpitPdp: SingleUrl[];
  hpukPdp: SingleUrl[];
};

const initializeAllUrls = (): AllUrls => ({
  homepages: [],
  wpitPlp: [],
  wpplPlp: [],
  wpfrPlp: [],
  bkdePlp: [],
  hpitPlp: [],
  hpukPlp: [],
  wpitPdp: [],
  wpplPdp: [],
  wpfrPdp: [],
  bkdePdp: [],
  hpitPdp: [],
  hpukPdp: [],
});

export const useFetchData = () => {
  const [allUrlsMobile, setAllUrlsMobile] = useState<AllUrls>(
    initializeAllUrls()
  );
  const [allUrlsDesktop, setAllUrlsDesktop] = useState<AllUrls>(
    initializeAllUrls()
  );
  const [noMoreCalls, setNoMoreCalls] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState("");
  const [timeoutCalls, setTimeoutCalls] = useState(0);

  const urlCruxHistory = `https://chromeuxreport.googleapis.com/v1/records:queryHistoryRecord?key=${
    import.meta.env.VITE_API_KEY
  }`;
  const urlCruxHistory2 = `https://chromeuxreport.googleapis.com/v1/records:queryHistoryRecord?key=${
    import.meta.env.VITE_API_KEY_2
  }`;

  const urlCruxDaily = `https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=${
    import.meta.env.VITE_API_KEY
  }`;
  const urlCruxDaily2 = `https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=${
    import.meta.env.VITE_API_KEY_2
  }`;

  const waitToLimitCallsTo150PerMinute = (timeInSeconds: number) => {
    setTimeoutCalls(timeInSeconds);
    return new Promise((resolve) => setTimeout(resolve, timeInSeconds * 1000));
  };

  useEffect(() => {
    let timeoutCallsInterval = setInterval(() => {
      if (timeoutCalls === 0) return;
      setTimeoutCalls((prevState) => prevState - 1);
    }, 1000);
    return () => clearInterval(timeoutCallsInterval);
  }, [timeoutCalls]);

  useEffect(() => {
    const fetchMarketData = async (
      market: keyof AllUrls,
      display: "mobile" | "desktop"
    ) => {
      try {
        await Promise.all(
          getMarketList(market).map(async (url, index) => {
            const dailyData = await fetchData(
              url,
              display === "mobile" ? "PHONE" : "DESKTOP",
              urlCruxDaily
            );
            const historyData = await fetchData(
              url,
              display === "mobile" ? "PHONE" : "DESKTOP",
              urlCruxHistory2
            );

            setCurrentUrl(
              `${display === "mobile" ? "MOBILE" : "DESKTOP"} - ${url}`
            );

            display === "mobile"
              ? setAllUrlsMobile((prevState) => ({
                  ...prevState,
                  [market]: [
                    ...prevState[market],
                    {
                      index: index + 1,
                      url,
                      dailyData,
                      historyData,
                    },
                  ],
                }))
              : setAllUrlsDesktop((prevState) => ({
                  ...prevState,
                  [market]: [
                    ...prevState[market],
                    {
                      index: index + 1,
                      url,
                      dailyData,
                      historyData,
                    },
                  ],
                }));
          })
        );
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };

    const fetchAllUrls = async () => {
      //CALLS FOR HOME/PLP MOBILE
      fetchMarketData("homepages", "mobile");
      fetchMarketData("wpitPlp", "mobile");
      fetchMarketData("wpplPlp", "mobile");
      fetchMarketData("wpfrPlp", "mobile");

      await waitToLimitCallsTo150PerMinute(60);

      fetchMarketData("bkdePlp", "mobile");
      fetchMarketData("hpitPlp", "mobile");
      fetchMarketData("hpukPlp", "mobile");

      await waitToLimitCallsTo150PerMinute(60);

      // CALLS FOR HOME/PLP DESKTOP
      fetchMarketData("homepages", "desktop");
      fetchMarketData("wpitPlp", "desktop");
      fetchMarketData("wpplPlp", "desktop");
      fetchMarketData("wpfrPlp", "desktop");

      await waitToLimitCallsTo150PerMinute(60);

      fetchMarketData("bkdePlp", "desktop");
      fetchMarketData("hpitPlp", "desktop");
      fetchMarketData("hpukPlp", "desktop");

      await waitToLimitCallsTo150PerMinute(60);

      //CALLS FOR PDP MOBILE
      fetchMarketData("wpitPdp", "mobile");

      await waitToLimitCallsTo150PerMinute(60);

      fetchMarketData("wpplPdp", "mobile");

      await waitToLimitCallsTo150PerMinute(60);

      fetchMarketData("wpfrPdp", "mobile");

      await waitToLimitCallsTo150PerMinute(60);

      fetchMarketData("bkdePdp", "mobile");

      await waitToLimitCallsTo150PerMinute(60);

      fetchMarketData("hpitPdp", "mobile");

      await waitToLimitCallsTo150PerMinute(60);

      fetchMarketData("hpukPdp", "mobile");

      await waitToLimitCallsTo150PerMinute(60);

      // CALLS FOR PDP DESKTOP
      fetchMarketData("wpitPdp", "desktop");

      await waitToLimitCallsTo150PerMinute(60);

      fetchMarketData("wpplPdp", "desktop");

      await waitToLimitCallsTo150PerMinute(60);

      fetchMarketData("wpfrPdp", "desktop");

      await waitToLimitCallsTo150PerMinute(60);

      fetchMarketData("bkdePdp", "desktop");

      await waitToLimitCallsTo150PerMinute(60);

      fetchMarketData("hpitPdp", "desktop");

      await waitToLimitCallsTo150PerMinute(60);

      fetchMarketData("hpukPdp", "desktop");

      await waitToLimitCallsTo150PerMinute(20);
      setNoMoreCalls(true);
    };

    fetchAllUrls();
  }, []);

  useEffect(() => {
    if (!noMoreCalls) return;
    window.localStorage.setItem("allUrlsMobile", JSON.stringify(allUrlsMobile));
    window.localStorage.setItem(
      "allUrlsDesktop",
      JSON.stringify(allUrlsDesktop)
    );
    setLoading(false);
  }, [noMoreCalls]);

  return { loading, currentUrl, timeoutCalls, allUrlsMobile, allUrlsDesktop };
};
