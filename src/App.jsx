import { useEffect, useState } from "react";

import "./App.scss";

import CityInfos from "@/components/CityInfos";
import WeatherInfos from "@/components/WeatherInfos";
import { getCurrentLocation } from "@/utils/geolocation";

function App() {
  const [cord, setCord] = useState(null);
  useEffect(() => {
    if (!cord) {
      getCurrentLocation(setCord);
    }
  }, []);
  console.log("in app", cord);
  return (
    <div className="App">
      <CityInfos />
      <WeatherInfos cord={cord} />
    </div>
  );
}

export default App;
