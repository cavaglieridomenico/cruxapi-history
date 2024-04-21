export interface FetchCruxHistoryApi {
  loading: boolean;
  data: CruxHistoryApi | undefined;
  error: ErrorApi | undefined;
}

export interface CruxHistoryApi {
  record: Record;
  urlNormalizationDetails: UrlNormalizationDetails;
}
export interface Record {
  key: Key;
  metrics: Metrics;
  collectionPeriods?: CollectionPeriodsEntity[] | null;
}
export interface Key {
  formFactor: string;
  url: string;
}
export interface Metrics {
  largest_contentful_paint: LargestContentfulPaintOrExperimentalTimeToFirstByte;
  cumulative_layout_shift: CumulativeLayoutShift;
  experimental_time_to_first_byte: LargestContentfulPaintOrExperimentalTimeToFirstByte;
}
export interface LargestContentfulPaintOrExperimentalTimeToFirstByte {
  histogramTimeseries?: HistogramTimeseriesEntity[] | null;
  percentilesTimeseries: PercentilesTimeseries;
}
export interface HistogramTimeseriesEntity {
  start: number;
  end?: number | null;
  densities?: number[] | null;
}
export interface PercentilesTimeseries {
  p75s?: number[] | null;
}
export interface CumulativeLayoutShift {
  histogramTimeseries?: HistogramTimeseriesEntity1[] | null;
  percentilesTimeseries: PercentilesTimeseries1;
}
export interface HistogramTimeseriesEntity1 {
  start: string;
  end?: string | null;
  densities?: number[] | null;
}
export interface PercentilesTimeseries1 {
  p75s?: string[] | null;
}
export interface CollectionPeriodsEntity {
  firstDate: FirstDateOrLastDate;
  lastDate: FirstDateOrLastDate;
}
export interface FirstDateOrLastDate {
  year: number;
  month: number;
  day: number;
}
export interface UrlNormalizationDetails {
  originalUrl: string;
  normalizedUrl: string;
}
export interface ErrorApi {
  code: string;
  message: string;
}
