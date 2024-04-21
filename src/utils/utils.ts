import {
  urlListBkdePdp,
  urlListWpfrPdp,
  urlListWpitPdp,
  urlListWpplPdp,
  urlListHpit,
  urlListHpuk,
} from "./urlList";

export const getMarkrtList = (market: string) => {
  switch (market) {
    case "wp-it":
      return urlListWpitPdp;
    case "wp-pl":
      return urlListWpplPdp;
    case "wp-fr":
      return urlListWpfrPdp;
    case "bk-de":
      return urlListBkdePdp;
    case "hp-it":
      return urlListHpit;
    case "hp-uk":
      return urlListHpuk;
    default:
      return urlListWpitPdp;
  }
};
