import { useState, useEffect } from "react";
import { getMarketList } from "../utils/utils";
import fetchData from "../utils/fetchData";

type SingleUrl = {
  index: number;
  url: string;
  data: any;
};
type AllUrl = {
  homepages: SingleUrl[];
  wpitPlp: SingleUrl[];
  wpplPlp: SingleUrl[];
  wpfrPlp: SingleUrl[];
  bkdePlp: SingleUrl[];
  hpitPlp: SingleUrl[];
  hpukPlp: SingleUrl[];
};

export const useFetchData = () => {
  const [allUrlsMobile, setAllUrlsMobile] = useState<AllUrl>({
    homepages: [],
    wpitPlp: [],
    wpplPlp: [],
    wpfrPlp: [],
    bkdePlp: [],
    hpitPlp: [],
    hpukPlp: [],
  });
  const [noMoreCalls, setNoMoreCalls] = useState(false);
  const [loading, setLoading] = useState(true);

  const urlCruxHistory = `https://chromeuxreport.googleapis.com/v1/records:queryHistoryRecord?key=${
    import.meta.env.VITE_API_KEY
  }`;

  useEffect(() => {
    getMarketList("homepages").forEach(async (url, index) => {
      const data = await fetchData(url, "PHONE", urlCruxHistory);
      setAllUrlsMobile((prevState) => {
        const singleUrl = {
          index: index + 1,
          url: url,
          data: data,
        };
        prevState?.homepages?.push(singleUrl);
        return prevState;
      });
      index === getMarketList("homepages").length - 1 &&
        setTimeout(() => setNoMoreCalls(true), 2000);
    });
    // getMarketList("wp-it-plp").forEach(async (url, index) => {
    //   const data = await fetchData(url, "PHONE", urlCruxHistory);
    //   setAllUrlsMobile((prevState) => {
    //     const singleUrl = {
    //       index: index + 1,
    //       url: url,
    //       data: data,
    //     };
    //     prevState?.wpitPlp?.push(singleUrl);
    //     return prevState;
    //   });
    // });
    // getMarketList("wp-pl-plp").forEach(async (url, index) => {
    //   const data = await fetchData(url, "PHONE", urlCruxHistory);
    //   setAllUrlsMobile((prevState) => {
    //     const singleUrl = {
    //       index: index + 1,
    //       url: url,
    //       data: data,
    //     };
    //     prevState?.wpplPlp?.push(singleUrl);
    //     return prevState;
    //   });
    // });
    // getMarketList("wp-fr-plp").forEach(async (url, index) => {
    //   const data = await fetchData(url, "PHONE", urlCruxHistory);
    //   setAllUrlsMobile((prevState) => {
    //     const singleUrl = {
    //       index: index + 1,
    //       url: url,
    //       data: data,
    //     };
    //     prevState?.wpfrPlp?.push(singleUrl);
    //     return prevState;
    //   });
    // });
    // getMarketList("bk-de-plp").forEach(async (url, index) => {
    //   const data = await fetchData(url, "PHONE", urlCruxHistory);
    //   setAllUrlsMobile((prevState) => {
    //     const singleUrl = {
    //       index: index + 1,
    //       url: url,
    //       data: data,
    //     };
    //     prevState?.bkdePlp?.push(singleUrl);
    //     return prevState;
    //   });
    // });
    // getMarketList("hp-it-plp").forEach(async (url, index) => {
    //   const data = await fetchData(url, "PHONE", urlCruxHistory);
    //   setAllUrlsMobile((prevState) => {
    //     const singleUrl = {
    //       index: index + 1,
    //       url: url,
    //       data: data,
    //     };
    //     prevState?.hpitPlp?.push(singleUrl);
    //     return prevState;
    //   });
    // });
    // getMarketList("hp-uk-plp").forEach(async (url, index) => {
    //   const data = await fetchData(url, "PHONE", urlCruxHistory);
    //   setAllUrlsMobile((prevState) => {
    //     const singleUrl = {
    //       index: index + 1,
    //       url: url,
    //       data: data,
    //     };
    //     prevState?.hpukPlp?.push(singleUrl);
    //     return prevState;
    //   });
    //   index === getMarketList("hp-uk-plp").length - 1 &&
    //     setTimeout(() => setNoMoreCalls(true), 2000);
    // });
  }, []);

  // index === getMarketList("wp-it-plp").length - 1 &&
  //       setTimeout(() => setNoMoreCalls(true), 2000);

  useEffect(() => {
    if (!noMoreCalls) return;
    setLoading(false);
  }, [noMoreCalls]);

  return { loading, allUrlsMobile };
};
