import { useEffect, useState } from "react";

import "./App.scss";

import CityInfos from "@/components/CityInfos";
import WeatherInfos from "@/components/WeatherInfos";
import { getCurrentLocation } from "@/utils/geolocation";

function App() {
  const [cord, setCord] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!cord) {
      getCurrentLocation(setCord);
    } else {
      setIsLoading(false);
    }
  }, [cord]);
  console.log("in app", cord);
  if (isLoading) {
    return <div>... Loading</div>;
  }
  return (
    <div className="App">
      <CityInfos cord={cord} />
      <WeatherInfos cord={cord} />
    </div>
  );
}

export default App;
