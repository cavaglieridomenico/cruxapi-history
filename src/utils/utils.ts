import {
  urlListBkdePdp,
  urlListWpfrPdp,
  urlListWpitPdp,
  urlListWpplPdp,
  urlListHpit,
  urlListHpuk,
  urlListWpitPlp,
  urlListWpplPlp,
  urlListBkdePlp,
  urlListHpukPlp,
  urlListWpfrPlp,
  urlListHpitPlp,
  urlListHomepages,
} from "./urlList";

export const getMarkrtList = (market: string) => {
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
      return urlListHpit;
    case "hp-uk-pdp":
      return urlListHpuk;
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
      return urlListWpitPdp;
  }
};
