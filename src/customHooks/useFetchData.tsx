import { useState, useEffect } from "react";
import { getMarketList } from "../utils/utils";
import fetchData from "../utils/fetchData";

export type SingleUrl = {
  index: number;
  url: string;
  dailyData: any;
  historyData: any;
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

export const useFetchData = () => {
  const [allUrlsMobile, setAllUrlsMobile] = useState<AllUrls>({
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
  const [allUrlsDesktop, setAllUrlsDesktop] = useState<AllUrls>({
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

  // useEffect(() => {
  //   getMarketList("wp-it-plp").forEach(async (url, index) => {
  //     const dailyData = await fetchData(url, "PHONE", urlCruxDaily);
  //     const historyData = await fetchData(url, "PHONE", urlCruxHistory);
  //     setCurrentUrl(`MOBILE - ${url}`);
  //     setAllUrlsMobile((prevState) => {
  //       const singleUrl = {
  //         index: index + 1,
  //         url: url,
  //         dailyData,
  //         historyData,
  //       };
  //       prevState?.wpitPlp?.push(singleUrl);
  //       return prevState;
  //     });
  //   });
  //   getMarketList("wp-it-plp").forEach(async (url, index) => {
  //     const dailyData = await fetchData(url, "DESKTOP", urlCruxDaily);
  //     const historyData = await fetchData(url, "DESKTOP", urlCruxHistory);
  //     setCurrentUrl(`DESKTOP - ${url}`);
  //     setAllUrlsDesktop((prevState) => {
  //       const singleUrl = {
  //         index: index + 1,
  //         url: url,
  //         dailyData,
  //         historyData,
  //       };
  //       prevState?.wpitPlp?.push(singleUrl);
  //       return prevState;
  //     });
  //     index === getMarketList("homepages").length - 1 &&
  //       setTimeout(() => setNoMoreCalls(true), 2000);
  //   });
  // }, []);

  useEffect(() => {
    let timeoutCallsInterval = setInterval(() => {
      if (timeoutCalls === 0) return;
      setTimeoutCalls((prevState) => prevState - 1);
    }, 1000);
    return () => clearInterval(timeoutCallsInterval);
  }, [timeoutCalls]);
  useEffect(() => {
    //CALLS FOR HOME/PLP MOBILE
    getMarketList("homepages").forEach(async (url, index) => {
      const dailyData = await fetchData(url, "PHONE", urlCruxDaily);
      const historyData = await fetchData(url, "PHONE", urlCruxHistory2);
      setCurrentUrl(`MOBILE - ${url}`);
      setAllUrlsMobile((prevState) => {
        const singleUrl = {
          index: index + 1,
          url: url,
          dailyData,
          historyData,
        };
        prevState?.homepages?.push(singleUrl);
        return prevState;
      });
    });
    getMarketList("wp-it-plp").forEach(async (url, index) => {
      const dailyData = await fetchData(url, "PHONE", urlCruxDaily);
      const historyData = await fetchData(url, "PHONE", urlCruxHistory2);
      setCurrentUrl(`MOBILE - ${url}`);
      setAllUrlsMobile((prevState) => {
        const singleUrl = {
          index: index + 1,
          url: url,
          dailyData,
          historyData,
        };
        prevState?.wpitPlp?.push(singleUrl);
        return prevState;
      });
    });
    getMarketList("wp-pl-plp").forEach(async (url, index) => {
      const dailyData = await fetchData(url, "PHONE", urlCruxDaily);
      const historyData = await fetchData(url, "PHONE", urlCruxHistory2);
      setCurrentUrl(`MOBILE - ${url}`);
      setAllUrlsMobile((prevState) => {
        const singleUrl = {
          index: index + 1,
          url: url,
          dailyData,
          historyData,
        };
        prevState?.wpplPlp?.push(singleUrl);
        return prevState;
      });
    });
    getMarketList("wp-fr-plp").forEach(async (url, index) => {
      const dailyData = await fetchData(url, "PHONE", urlCruxDaily);
      const historyData = await fetchData(url, "PHONE", urlCruxHistory2);
      setCurrentUrl(`MOBILE - ${url}`);
      setAllUrlsMobile((prevState) => {
        const singleUrl = {
          index: index + 1,
          url: url,
          dailyData,
          historyData,
        };
        prevState?.wpfrPlp?.push(singleUrl);
        return prevState;
      });
    });
    getMarketList("bk-de-plp").forEach(async (url, index) => {
      const dailyData = await fetchData(url, "PHONE", urlCruxDaily);
      const historyData = await fetchData(url, "PHONE", urlCruxHistory2);
      setCurrentUrl(`MOBILE - ${url}`);
      setAllUrlsMobile((prevState) => {
        const singleUrl = {
          index: index + 1,
          url: url,
          dailyData,
          historyData,
        };
        prevState?.bkdePlp?.push(singleUrl);
        return prevState;
      });
    });
    getMarketList("hp-it-plp").forEach(async (url, index) => {
      const dailyData = await fetchData(url, "PHONE", urlCruxDaily);
      const historyData = await fetchData(url, "PHONE", urlCruxHistory2);
      setCurrentUrl(`MOBILE - ${url}`);
      setAllUrlsMobile((prevState) => {
        const singleUrl = {
          index: index + 1,
          url: url,
          dailyData,
          historyData,
        };
        prevState?.hpitPlp?.push(singleUrl);
        return prevState;
      });
    });
    getMarketList("hp-uk-plp").forEach(async (url, index) => {
      const dailyData = await fetchData(url, "PHONE", urlCruxDaily);
      const historyData = await fetchData(url, "PHONE", urlCruxHistory2);
      setCurrentUrl(`MOBILE - ${url}`);
      setAllUrlsMobile((prevState) => {
        const singleUrl = {
          index: index + 1,
          url: url,
          dailyData,
          historyData,
        };
        prevState?.hpukPlp?.push(singleUrl);
        return prevState;
      });
    });
    // CALLS FOR HOME/PLP DESKTOP
    setTimeoutCalls(60);
    setTimeout(() => {
      getMarketList("homepages").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "DESKTOP", urlCruxDaily);
        const historyData = await fetchData(url, "DESKTOP", urlCruxHistory2);
        setCurrentUrl(`DESKTOP - ${url}`);
        setAllUrlsDesktop((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.homepages?.push(singleUrl);
          return prevState;
        });
      });
      getMarketList("wp-it-plp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "DESKTOP", urlCruxDaily);
        const historyData = await fetchData(url, "DESKTOP", urlCruxHistory2);
        setCurrentUrl(`DESKTOP - ${url}`);
        setAllUrlsDesktop((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.wpitPlp?.push(singleUrl);
          return prevState;
        });
      });
      getMarketList("wp-pl-plp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "DESKTOP", urlCruxDaily);
        const historyData = await fetchData(url, "DESKTOP", urlCruxHistory2);
        setCurrentUrl(`DESKTOP - ${url}`);
        setAllUrlsDesktop((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.wpplPlp?.push(singleUrl);
          return prevState;
        });
      });
      getMarketList("wp-fr-plp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "DESKTOP", urlCruxDaily);
        const historyData = await fetchData(url, "DESKTOP", urlCruxHistory2);
        setCurrentUrl(`DESKTOP - ${url}`);
        setAllUrlsDesktop((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.wpfrPlp?.push(singleUrl);
          return prevState;
        });
      });
      getMarketList("bk-de-plp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "DESKTOP", urlCruxDaily);
        const historyData = await fetchData(url, "DESKTOP", urlCruxHistory2);
        setCurrentUrl(`DESKTOP - ${url}`);
        setAllUrlsDesktop((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.bkdePlp?.push(singleUrl);
          return prevState;
        });
      });
      getMarketList("hp-it-plp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "DESKTOP", urlCruxDaily);
        const historyData = await fetchData(url, "DESKTOP", urlCruxHistory2);
        setCurrentUrl(`DESKTOP - ${url}`);
        setAllUrlsDesktop((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.hpitPlp?.push(singleUrl);
          return prevState;
        });
      });
      getMarketList("hp-uk-plp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "DESKTOP", urlCruxDaily);
        const historyData = await fetchData(url, "DESKTOP", urlCruxHistory2);
        setCurrentUrl(`DESKTOP - ${url}`);
        setAllUrlsDesktop((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.hpukPlp?.push(singleUrl);
          return prevState;
        });
      });
      setTimeoutCalls(60);
    }, 60000);
    //CALLS FOR PDP MOBILE
    setTimeout(() => {
      getMarketList("wp-it-pdp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "PHONE", urlCruxDaily);
        const historyData = await fetchData(url, "PHONE", urlCruxHistory2);
        setCurrentUrl(`MOBILE - ${url}`);
        setAllUrlsMobile((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.wpitPdp?.push(singleUrl);
          return prevState;
        });
      });
      setTimeoutCalls(60);
    }, 120000);
    setTimeout(() => {
      getMarketList("wp-pl-pdp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "PHONE", urlCruxDaily);
        const historyData = await fetchData(url, "PHONE", urlCruxHistory2);
        setCurrentUrl(`MOBILE - ${url}`);
        setAllUrlsMobile((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.wpplPdp?.push(singleUrl);
          return prevState;
        });
      });
      setTimeoutCalls(60);
    }, 180000);
    setTimeout(() => {
      getMarketList("wp-fr-pdp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "PHONE", urlCruxDaily);
        const historyData = await fetchData(url, "PHONE", urlCruxHistory2);
        setCurrentUrl(`MOBILE - ${url}`);
        setAllUrlsMobile((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.wpfrPdp?.push(singleUrl);
          return prevState;
        });
      });
      setTimeoutCalls(60);
    }, 240000);
    setTimeout(() => {
      getMarketList("bk-de-pdp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "PHONE", urlCruxDaily);
        const historyData = await fetchData(url, "PHONE", urlCruxHistory2);
        setCurrentUrl(`MOBILE - ${url}`);
        setAllUrlsMobile((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.bkdePdp?.push(singleUrl);
          return prevState;
        });
      });
      setTimeoutCalls(60);
    }, 300000);
    setTimeout(() => {
      getMarketList("hp-it-pdp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "PHONE", urlCruxDaily);
        const historyData = await fetchData(url, "PHONE", urlCruxHistory2);
        setCurrentUrl(`MOBILE - ${url}`);
        setAllUrlsMobile((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.hpitPdp?.push(singleUrl);
          return prevState;
        });
      });
      setTimeoutCalls(60);
    }, 360000);
    setTimeout(() => {
      getMarketList("hp-uk-pdp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "PHONE", urlCruxDaily);
        const historyData = await fetchData(url, "PHONE", urlCruxHistory2);
        setCurrentUrl(`MOBILE - ${url}`);
        setAllUrlsMobile((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.hpukPdp?.push(singleUrl);
          return prevState;
        });
      });
      setTimeoutCalls(60);
    }, 420000);
    // CALLS FOR PDP DESKTOP
    setTimeout(() => {
      getMarketList("wp-it-pdp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "DESKTOP", urlCruxDaily);
        const historyData = await fetchData(url, "DESKTOP", urlCruxHistory2);
        setCurrentUrl(`DESKTOP - ${url}`);
        setAllUrlsDesktop((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.wpitPdp?.push(singleUrl);
          return prevState;
        });
      });
      setTimeoutCalls(60);
    }, 480000);
    setTimeout(() => {
      getMarketList("wp-pl-pdp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "DESKTOP", urlCruxDaily);
        const historyData = await fetchData(url, "DESKTOP", urlCruxHistory2);
        setCurrentUrl(`DESKTOP - ${url}`);
        setAllUrlsDesktop((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.wpplPdp?.push(singleUrl);
          return prevState;
        });
      });
      setTimeoutCalls(60);
    }, 540000);
    setTimeout(() => {
      getMarketList("wp-fr-pdp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "DESKTOP", urlCruxDaily);
        const historyData = await fetchData(url, "DESKTOP", urlCruxHistory2);
        setCurrentUrl(`DESKTOP - ${url}`);
        setAllUrlsDesktop((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.wpfrPdp?.push(singleUrl);
          return prevState;
        });
      });
      setTimeoutCalls(60);
    }, 600000);
    setTimeout(() => {
      getMarketList("bk-de-pdp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "DESKTOP", urlCruxDaily);
        const historyData = await fetchData(url, "DESKTOP", urlCruxHistory2);
        setCurrentUrl(`DESKTOP - ${url}`);
        setAllUrlsDesktop((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.bkdePdp?.push(singleUrl);
          return prevState;
        });
      });
      setTimeoutCalls(60);
    }, 660000);
    setTimeout(() => {
      getMarketList("hp-it-pdp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "DESKTOP", urlCruxDaily);
        const historyData = await fetchData(url, "DESKTOP", urlCruxHistory2);
        setCurrentUrl(`DESKTOP - ${url}`);
        setAllUrlsDesktop((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.hpitPdp?.push(singleUrl);
          return prevState;
        });
      });
      setTimeoutCalls(60);
    }, 720000);
    setTimeout(() => {
      getMarketList("hp-uk-pdp").forEach(async (url, index) => {
        const dailyData = await fetchData(url, "DESKTOP", urlCruxDaily);
        const historyData = await fetchData(url, "DESKTOP", urlCruxHistory2);
        setCurrentUrl(`DESKTOP - ${url}`);
        setAllUrlsDesktop((prevState) => {
          const singleUrl = {
            index: index + 1,
            url: url,
            dailyData,
            historyData,
          };
          prevState?.hpukPdp?.push(singleUrl);
          return prevState;
        });
        index === getMarketList("hp-uk-pdp").length - 1 &&
          setTimeout(() => setNoMoreCalls(true), 2000);
      });
    }, 780000);
  }, []);

  // index === getMarketList("wp-it-plp").length - 1 &&
  //       setTimeout(() => setNoMoreCalls(true), 2000);

  useEffect(() => {
    if (!noMoreCalls) return;
    setLoading(false);
  }, [noMoreCalls]);

  return { loading, currentUrl, timeoutCalls, allUrlsMobile, allUrlsDesktop };
};
