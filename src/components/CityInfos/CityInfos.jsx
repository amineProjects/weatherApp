// import React from "react";
import "./cityInfos.scss";
import Map from "@/components/Map";

const CityInfos = ({ cord, setOpenSelectCity, currentWeather }) => {
  return (
    <div className={`cityInfos cityInfos-${currentWeather}`}>
      <button className="btn" onClick={() => setOpenSelectCity(true)}>
        Change city
      </button>
      <Map cord={cord} />
    </div>
  );
};

export default CityInfos;
