// import React from "react";
import "./cityInfos.scss";

const CityInfos = ({
  country = "germany",
  city = "berlin",
  image = { src: "https://via.placeholder.com/1440x360.png" },
}) => {
  return (
    <div className="cityInfos">
      <h1 className="cityInfos--title">
        <span>weather</span> frocast
      </h1>
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image.src})`,
        }}
      >
        <div className="hero--text">
          <h2 className="hero--title" style={{ fontSize: "3em" }}>
            {city}
          </h2>
          <h4 className="hero--subtitle" style={{ fontSize: "1.5em" }}>
            {country}
          </h4>
        </div>
      </div>
      <div
        className="map"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://via.placeholder.com/1440x480.png")`,
        }}
      ></div>
    </div>
  );
};

export default CityInfos;
