type CollectionPeriod = {
  firstDate: {
    year: number;
    month: number;
    day: number;
  };
  lastDate: {
    year: number;
    month: number;
    day: number;
  };
};

type TTFB = {
  histogram: Histogram[];
  percentiles: {
    p75: number;
  };
};

type Histogram = {
  start: number;
  end?: number;
  density: number;
};
