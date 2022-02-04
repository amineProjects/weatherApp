import "./App.scss";

import CityInfos from "@/components/CityInfos";
import WeatherInfos from "@/components/WeatherInfos";

function App() {
  return (
    <div className="App App-sunny">
      <CityInfos />
      <WeatherInfos />
    </div>
  );
}

export default App;
