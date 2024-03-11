import { useState, useEffect } from "react";
import TableHeaderCell from "./components/TableHeaderCell";
import "./App.css";
import DensityCell from "./components/DensityCell";
import PercentileCell from "./components/PercentileCell";

function App() {
  const [cruxData, setCruxData] = useState({
    record: {
      key: {
        formFactor: "PHONE",
        url: "https://www.whirlpool.it/prodotti/lavaggio-e-asciugatura/lavatrici",
      },
      metrics: {
        experimental_time_to_first_byte: {
          histogramTimeseries: [
            {
              start: 0,
              end: 800,
              densities: [
                0.17242431640625, 0.16845703125, 0.159881591796875,
                0.154998779296875, 0.157684326171875, 0.156463623046875,
                0.164581298828125, 0.179168701171875, 0.18658447265625,
                0.1812744140625, 0.167083740234375, 0.151153564453125,
                0.159088134765625, 0.17315673828125, 0.190643310546875,
                0.2220458984375, 0.207916259765625, 0.20660400390625,
                0.235595703125, 0.23504638671875, 0.2425537109375,
                0.2552490234375, 0.238677978515625, 0.240631103515625,
                0.231109619140625,
              ],
            },
            {
              start: 800,
              end: 1800,
              densities: [
                0.06512451171875, 0.066741943359375, 0.068115234375,
                0.070831298828125, 0.059173583984375, 0.059051513671875,
                0.052825927734375, 0.038543701171875, 0.03802490234375,
                0.045654296875, 0.061187744140625, 0.06097412109375,
                0.071319580078125, 0.063232421875, 0.04986572265625,
                0.053466796875, 0.040802001953125, 0.040252685546875,
                0.04022216796875, 0.040374755859375, 0.03692626953125,
                0.03826904296875, 0.030029296875, 0.026275634765625,
                0.027496337890625,
              ],
            },
            {
              start: 1800,
              densities: [
                0.762451171875, 0.764801025390625, 0.772003173828125,
                0.774169921875, 0.78314208984375, 0.78448486328125,
                0.7825927734375, 0.78228759765625, 0.775390625, 0.7730712890625,
                0.771728515625, 0.787872314453125, 0.76959228515625,
                0.76361083984375, 0.759490966796875, 0.7244873046875,
                0.75128173828125, 0.753143310546875, 0.72418212890625,
                0.724578857421875, 0.72052001953125, 0.70648193359375,
                0.731292724609375, 0.73309326171875, 0.74139404296875,
              ],
            },
          ],
          percentilesTimeseries: {
            p75s: [
              6605, 6347, 6080, 5957, 5971, 5733, 6022, 5986, 6070, 6033, 5731,
              5634, 5426, 5384, 5385, 5336, 5516, 5766, 5616, 5721, 5724, 5724,
              5898, 5976, 5939,
            ],
          },
        },
        largest_contentful_paint: {
          histogramTimeseries: [
            {
              start: 0,
              end: 2500,
              densities: [
                0.148834228515625, 0.154144287109375, 0.157470703125,
                0.192169189453125, 0.217559814453125, 0.204010009765625,
                0.169525146484375, 0.132080078125, 0.13250732421875,
                0.160858154296875, 0.180511474609375, 0.1634521484375,
                0.145843505859375, 0.120269775390625, 0.129974365234375,
                0.166046142578125, 0.166168212890625, 0.1741943359375,
                0.174407958984375, 0.17059326171875, 0.167816162109375,
                0.170623779296875, 0.1468505859375, 0.145599365234375,
                0.1463623046875,
              ],
            },
            {
              start: 2500,
              end: 4000,
              densities: [
                0.102996826171875, 0.113983154296875, 0.142547607421875,
                0.143768310546875, 0.1632080078125, 0.155975341796875,
                0.1275634765625, 0.116058349609375, 0.097259521484375,
                0.102935791015625, 0.11004638671875, 0.10223388671875,
                0.1036376953125, 0.09771728515625, 0.101654052734375,
                0.122344970703125, 0.11517333984375, 0.11517333984375,
                0.123291015625, 0.127777099609375, 0.133270263671875,
                0.126617431640625, 0.10882568359375, 0.105682373046875,
                0.09991455078125,
              ],
            },
            {
              start: 4000,
              densities: [
                0.7481689453125, 0.73187255859375, 0.699981689453125, 0.6640625,
                0.619232177734375, 0.6400146484375, 0.702911376953125,
                0.751861572265625, 0.770233154296875, 0.7362060546875,
                0.709442138671875, 0.73431396484375, 0.750518798828125,
                0.782012939453125, 0.76837158203125, 0.71160888671875,
                0.718658447265625, 0.71063232421875, 0.702301025390625,
                0.701629638671875, 0.69891357421875, 0.7027587890625,
                0.74432373046875, 0.74871826171875, 0.75372314453125,
              ],
            },
          ],
          percentilesTimeseries: {
            p75s: [
              9814, 9128, 8241, 7602, 7108, 7549, 9104, 9768, 9613, 8916, 8201,
              8547, 8768, 9257, 9196, 8722, 8996, 9012, 8783, 8815, 8690, 8987,
              9332, 9349, 9684,
            ],
          },
        },
      },
      collectionPeriods: [
        {
          firstDate: {
            year: 2023,
            month: 8,
            day: 20,
          },
          lastDate: {
            year: 2023,
            month: 9,
            day: 16,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 8,
            day: 27,
          },
          lastDate: {
            year: 2023,
            month: 9,
            day: 23,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 9,
            day: 3,
          },
          lastDate: {
            year: 2023,
            month: 9,
            day: 30,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 9,
            day: 10,
          },
          lastDate: {
            year: 2023,
            month: 10,
            day: 7,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 9,
            day: 17,
          },
          lastDate: {
            year: 2023,
            month: 10,
            day: 14,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 9,
            day: 24,
          },
          lastDate: {
            year: 2023,
            month: 10,
            day: 21,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 10,
            day: 1,
          },
          lastDate: {
            year: 2023,
            month: 10,
            day: 28,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 10,
            day: 8,
          },
          lastDate: {
            year: 2023,
            month: 11,
            day: 4,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 10,
            day: 15,
          },
          lastDate: {
            year: 2023,
            month: 11,
            day: 11,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 10,
            day: 22,
          },
          lastDate: {
            year: 2023,
            month: 11,
            day: 18,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 10,
            day: 29,
          },
          lastDate: {
            year: 2023,
            month: 11,
            day: 25,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 11,
            day: 5,
          },
          lastDate: {
            year: 2023,
            month: 12,
            day: 2,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 11,
            day: 12,
          },
          lastDate: {
            year: 2023,
            month: 12,
            day: 9,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 11,
            day: 19,
          },
          lastDate: {
            year: 2023,
            month: 12,
            day: 16,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 11,
            day: 26,
          },
          lastDate: {
            year: 2023,
            month: 12,
            day: 23,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 12,
            day: 3,
          },
          lastDate: {
            year: 2023,
            month: 12,
            day: 30,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 12,
            day: 10,
          },
          lastDate: {
            year: 2024,
            month: 1,
            day: 6,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 12,
            day: 17,
          },
          lastDate: {
            year: 2024,
            month: 1,
            day: 13,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 12,
            day: 24,
          },
          lastDate: {
            year: 2024,
            month: 1,
            day: 20,
          },
        },
        {
          firstDate: {
            year: 2023,
            month: 12,
            day: 31,
          },
          lastDate: {
            year: 2024,
            month: 1,
            day: 27,
          },
        },
        {
          firstDate: {
            year: 2024,
            month: 1,
            day: 7,
          },
          lastDate: {
            year: 2024,
            month: 2,
            day: 3,
          },
        },
        {
          firstDate: {
            year: 2024,
            month: 1,
            day: 14,
          },
          lastDate: {
            year: 2024,
            month: 2,
            day: 10,
          },
        },
        {
          firstDate: {
            year: 2024,
            month: 1,
            day: 21,
          },
          lastDate: {
            year: 2024,
            month: 2,
            day: 17,
          },
        },
        {
          firstDate: {
            year: 2024,
            month: 1,
            day: 28,
          },
          lastDate: {
            year: 2024,
            month: 2,
            day: 24,
          },
        },
        {
          firstDate: {
            year: 2024,
            month: 2,
            day: 4,
          },
          lastDate: {
            year: 2024,
            month: 3,
            day: 2,
          },
        },
      ],
    },
  });

  const cruxUrl1 =
    "https://www.whirlpool.it/prodotti/cottura/forni-a-microonde";
  const cruxUrl2 = "https://www.whirlpool.it/prodotti/cottura/piani-cottura";
  const cruxUrl3 = "https://www.whirlpool.it/prodotti/cottura/forni";
  const cruxUrl4 = "https://www.whirlpool.it/prodotti/refrigerazione";
  const cruxUrl5 = "https://www.whirlpool.it/prodotti/lavastoviglie";
  const cruxUrl6 =
    "https://www.whirlpool.it/prodotti/lavaggio-e-asciugatura/lavatrici";
  const cruxUrl7 =
    "https://www.whirlpool.it/prodotti/refrigerazione/frigoriferi-combinati-e-doppia-porta";
  const cruxUrl8 =
    "https://www.whirlpool.it/prodotti/refrigerazione/congelatori";
  const cruxUrl9 =
    "https://www.whirlpool.it/prodotti/lavaggio-e-asciugatura/asciugatrici";

  const body = {
    url: cruxUrl4,
    formFactor: "PHONE",
    metrics: ["experimental_time_to_first_byte", "largest_contentful_paint"],
  };

  const fetchCruxData = () => {
    fetch(
      "https://chromeuxreport.googleapis.com/v1/records:queryHistoryRecord?key=AIzaSyBJIzf5dT08r-Xz_o07KrmhRDJ7539Jk6s",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCruxData(data);
      });
  };

  useEffect(() => {
    fetchCruxData();
  }, []);
  const record = cruxData.record;
  console.log(record);

  return (
    <>
      <h1>CrUX API history</h1>
      <p>{record?.key?.url}</p>
      <div className="wrapper">
        <table>
          <tr>
            <th className="col-1">TTFB</th>
            {record &&
              record.collectionPeriods?.map((period, index) => (
                <TableHeaderCell
                  key={index}
                  firstDate={period?.firstDate}
                  lastDate={period?.lastDate}
                />
              ))}
          </tr>
          {record &&
            record.metrics?.experimental_time_to_first_byte?.histogramTimeseries?.map(
              (histogramTimeItem, index) => {
                return histogramTimeItem.start === 0 ? (
                  <tr>
                    <td>
                      <span>GOOD</span>
                      <br />
                      <span>0 ms - 800 ms</span>
                    </td>
                    <DensityCell
                      key={index}
                      densities={histogramTimeItem?.densities}
                    />
                  </tr>
                ) : histogramTimeItem?.start === 800 ? (
                  <tr>
                    <td>
                      <span>NEED IMPROVEMENT</span>
                      <br />
                      <span>800 ms - 1200 ms</span>
                    </td>
                    <DensityCell
                      key={index}
                      densities={histogramTimeItem.densities}
                    />
                  </tr>
                ) : (
                  <tr>
                    <td>
                      <p>POOR</p>
                      <span>over 1200ms</span>
                    </td>
                    <DensityCell
                      key={index}
                      densities={histogramTimeItem?.densities}
                    />
                  </tr>
                );
              }
            )}
          <tr>
            <td>PERCENTILE 75%</td>
            {record &&
              record.metrics?.experimental_time_to_first_byte?.percentilesTimeseries?.p75s?.map(
                (percentileItem) => {
                  return <PercentileCell percentile={percentileItem} />;
                }
              )}
          </tr>
        </table>
        <table>
          <tr>
            <th className="col-1">LCP</th>
            {record &&
              record.collectionPeriods?.map((period, index) => (
                <TableHeaderCell
                  key={index}
                  firstDate={period?.firstDate}
                  lastDate={period?.lastDate}
                />
              ))}
          </tr>
          {record &&
            record.metrics?.largest_contentful_paint?.histogramTimeseries?.map(
              (histogramTimeItem, index) => {
                return histogramTimeItem.start === 0 ? (
                  <tr>
                    <td>
                      <span>GOOD</span>
                      <br />
                      <span>0 ms - 2500 ms</span>
                    </td>
                    <DensityCell
                      key={index}
                      densities={histogramTimeItem?.densities}
                    />
                  </tr>
                ) : histogramTimeItem?.start === 2500 ? (
                  <tr>
                    <td>
                      <span>NEED IMPROVEMENT</span>
                      <br />
                      <span>2500 ms - 4000 ms</span>
                    </td>
                    <DensityCell
                      key={index}
                      densities={histogramTimeItem.densities}
                    />
                  </tr>
                ) : (
                  <tr>
                    <td>
                      <span>POOR</span>
                      <br />
                      <span>over 4000 ms</span>
                    </td>
                    <DensityCell
                      key={index}
                      densities={histogramTimeItem?.densities}
                    />
                  </tr>
                );
              }
            )}
          <tr>
            <td>PERCENTILE 75%</td>
            {record &&
              record.metrics?.largest_contentful_paint?.percentilesTimeseries?.p75s?.map(
                (percentileItem) => {
                  return <PercentileCell percentile={percentileItem} />;
                }
              )}
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;
