import * as React from "react";
import "./App.css";
import { Slider } from "./components/slider";

function App() {
  const [sliderValue, setSliderValue] = React.useState(100);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frequency</h1>
      </header>
      <body>
        <h1>{sliderValue}</h1>
        <Slider initialValue={sliderValue} onChange={setSliderValue} />
      </body>
    </div>
  );
}

export default App;
