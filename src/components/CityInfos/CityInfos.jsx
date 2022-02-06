// import React from "react";
import "./cityInfos.scss";
import Map from "@/components/Map";

const CityInfos = ({ cord, setOpenSelectCity }) => {
  return (
    <div className={`cityInfos cityInfos--sunny`}>
      <button className="btn" onClick={() => setOpenSelectCity(true)}>
        Change city
      </button>
      <Map cord={cord} />
    </div>
  );
};

export default CityInfos;
