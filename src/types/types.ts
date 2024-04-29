/*CrUX API*/
export interface FetchCruxApi {
  loading: boolean;
  data: CruxApi | undefined;
  error: ErrorApi | undefined;
}
export interface CruxApi {
  record: Record;
  urlNormalizationDetails: UrlNormalizationDetails;
}
export interface Record {
  key: Key;
  metrics: Metrics;
  collectionPeriod?: CollectionPeriodsEntity | null;
}
export interface Metrics {
  largest_contentful_paint: LargestContentfulPaintOrExperimentalTimeToFirstByte;
  cumulative_layout_shift: CumulativeLayoutShift;
  experimental_time_to_first_byte: LargestContentfulPaintOrExperimentalTimeToFirstByte;
}
export interface LargestContentfulPaintOrExperimentalTimeToFirstByte {
  histogram?: HistogramEntity | null;
  percentiles: Percentiles;
}
export interface CumulativeLayoutShift {
  histogram?: HistogramEntity | null;
  percentiles: Percentiles;
}
export interface HistogramEntity {
  start: number;
  end?: number | null;
  densities?: number | null;
}
export interface Percentiles {
  p75?: number | null;
}

/*CrUX History API*/
export interface FetchCruxHistoryApi {
  loading: boolean;
  data: CruxHistoryApi | undefined;
  error: ErrorApi | undefined;
}

export interface CruxHistoryApi {
  record: RecordHistory;
  urlNormalizationDetails: UrlNormalizationDetails;
}
export interface RecordHistory {
  key: Key;
  metrics: MetricsHistory;
  collectionPeriods?: CollectionPeriodsEntity[] | null;
}
export interface Key {
  formFactor: string;
  url: string;
}
export interface MetricsHistory {
  largest_contentful_paint: LargestContentfulPaintOrExperimentalTimeToFirstByteHistory;
  cumulative_layout_shift: CumulativeLayoutShiftHistory;
  experimental_time_to_first_byte: LargestContentfulPaintOrExperimentalTimeToFirstByteHistory;
}
export interface LargestContentfulPaintOrExperimentalTimeToFirstByteHistory {
  histogramTimeseries?: HistogramTimeseriesEntityHistory[] | null;
  percentilesTimeseries: PercentilesTimeseries;
}
export interface HistogramTimeseriesEntityHistory {
  start: number;
  end?: number | null;
  densities?: number[] | null;
}
export interface PercentilesTimeseries {
  p75s?: number[] | null;
}
export interface CumulativeLayoutShiftHistory {
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
