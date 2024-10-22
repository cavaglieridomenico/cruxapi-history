import { urlListHomepages } from "./urlLists/urlListHomepages";
import { urlListWpitPlp } from "./urlLists/urlListWpitPlp";
import { urlListWpitPdp } from "./urlLists/urlListWpitPdp";
import { urlListWpplPlp } from "./urlLists/urlListWpplPlp";
import { urlListWpplPdp } from "./urlList";
import { urlListHpitPlp } from "./urlLists/urlListHpitPlp";
import { urlListHpitPdp } from "./urlLists/urlListHpitPdp";
import { urlListHpukPlp } from "./urlLists/urlListHpukPlp";
import { urlListHpukPdp } from "./urlLists/urlListHpukPdp";
import { urlListWpfrPlp } from "./urlLists/urlListWpfrPlp";
import { urlListWpfrPdp } from "./urlLists/urlListWpfrPdp";
import { urlListBkdePlp } from "./urlLists/urlListBkdePlp";
import { urlListBkdePdp } from "./urlLists/urlListBkdePdp";

export const getMarketList = (market: string) => {
  switch (market) {
    case "homepages":
      return urlListHomepages;
    case "wp-it-pdp":
      return urlListWpitPdp;
    case "wp-pl-pdp":
      return urlListWpplPdp;
    case "wp-fr-pdp":
      return urlListWpfrPdp;
    case "bk-de-pdp":
      return urlListBkdePdp;
    case "hp-it-pdp":
      return urlListHpitPdp;
    case "hp-uk-pdp":
      return urlListHpukPdp;
    case "wp-it-plp":
      return urlListWpitPlp;
    case "wp-pl-plp":
      return urlListWpplPlp;
    case "wp-fr-plp":
      return urlListWpfrPlp;
    case "bk-de-plp":
      return urlListBkdePlp;
    case "hp-it-plp":
      return urlListHpitPlp;
    case "hp-uk-plp":
      return urlListHpukPlp;
    default:
      return [];
  }
};

export const getDisableTime = (selectItem: string): number => {
  return selectItem.includes("home")
    ? 2000
    : selectItem.includes("plp")
    ? 3000
    : 6000;
};
