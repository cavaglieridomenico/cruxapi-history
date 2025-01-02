import { urlListHomepages } from "./urlLists/urlListHomepages";
import { urlListWpitPlp } from "./urlLists/urlListWpitPlp";
import { urlListWpitPdp } from "./urlLists/urlListWpitPdp";
import { urlListWpplPlp } from "./urlLists/urlListWpplPlp";
import { urlListWpplPdp } from "./urlLists/urlListWpplPdp";
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
    case "wpitPdp":
      return urlListWpitPdp;
    case "wpplPdp":
      return urlListWpplPdp;
    case "wpfrPdp":
      return urlListWpfrPdp;
    case "bkdePdp":
      return urlListBkdePdp;
    case "hpitPdp":
      return urlListHpitPdp;
    case "hpukPdp":
      return urlListHpukPdp;
    case "wpitPlp":
      return urlListWpitPlp;
    case "wpplPlp":
      return urlListWpplPlp;
    case "wpfrPlp":
      return urlListWpfrPlp;
    case "bkdePlp":
      return urlListBkdePlp;
    case "hpitPlp":
      return urlListHpitPlp;
    case "hpukPlp":
      return urlListHpukPlp;
    default:
      return [];
  }
};
