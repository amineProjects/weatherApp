import { useEffect, useState } from "react";

import "./App.scss";

import Cities from "@/components/Cities";
import CityInfos from "@/components/CityInfos";
import WeatherInfos from "@/components/WeatherInfos";
import storage from "@/utils/storage";

function App() {
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (info) {
      setIsLoading(false);
    } else {
      setInfo(storage.getItem("cityInfo"));
    }
  }, [info]);
  console.log("in app", info);
  if (isLoading) {
    return <Cities />;
  }
  return (
    <div className="App">
      <CityInfos cord={info.cord} />
      <WeatherInfos cord={info.cord} />
    </div>
  );
}

export default App;
