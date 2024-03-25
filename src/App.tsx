import "./App.css";
import SingleUrlTable from "./components/SingleUrlTable";
import { urlList } from "./utils/urlList";

function App() {
  const apiKey = "";

  return (
    <>
      <h1>CrUX API history</h1>
      <SingleUrlTable
        url={"https://www.bauknecht.de/hausgeraete"}
        apiKey={apiKey}
      />
      {urlList.map((url) => (
        <SingleUrlTable url={url} apiKey={apiKey} />
      ))}
    </>
  );
}

export default App;
