// import React from "react";
import "./cityInfos.scss";
import Map from "@/components/Map";

const CityInfos = ({ cord }) => {
  return (
    <div className="cityInfos">
      <h1 className="cityInfos--title">
        <span>weather</span> frocast
      </h1>
      <Map cord={cord} />
    </div>
  );
};

export default CityInfos;
