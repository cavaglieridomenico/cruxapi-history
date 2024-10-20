import { useState } from "react";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [startFetching, setStartFetching] = useState(false);

  if (!startFetching) {
    return (
      <div
        className="start-button-container"
        onClick={() => setStartFetching(true)}
      >
        <button className="start-button">Start fetching data</button>
      </div>
    );
  }
  return <Home />;
}

export default App;
