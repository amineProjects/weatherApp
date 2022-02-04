import { useState, useRef } from "react";
import WeatherIcon from "./WeatherIcon";
import "./weatherInfos.scss";

const weatherPr = [
  { day: "sunday", weather: "Clear", temp: "31" },
  { day: "monday", weather: "Cloudy", temp: "31" },
  { day: "tuesdya", weather: "Rain", temp: "31" },
  { day: "wednesday", weather: "Drizzle", temp: "31" },
  { day: "thursday", weather: "Overcast", temp: "31" },
  { day: "friday", weather: "HeavyRain", temp: "31" },
  { day: "saturday", weather: "Clear", temp: "31" },
];

const WeatherInfos = ({
  city = "berlin",
  country = "germany",
  infos = weatherPr,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const d = new Date();
  let today = d.toLocaleDateString();
  return (
    <div className="weather weather-sunny">
      <button className="weather--btn" onClick={() => setOpenModal(true)}>
        Select another city
      </button>
      <div className="info">
        <div className="info--text">
          <div>{d.toDateString()}</div>
          <div className="info--temp">
            28<span className="sup">o</span>C
          </div>
          <div>{` ${city}, ${country}`}</div>
        </div>
        <WeatherIcon statu="HeavyRain" />
      </div>
      <table className="predictions">
        <tbody>
          {infos.map((value) => {
            return (
              <tr>
                <td className="predictions--cell">{value?.day}</td>
                <td className="predictions--cell predictions--cell-center">
                  <WeatherIcon statu={value?.weather} />
                </td>
                <td className="predictions--cell predictions--cell-last">
                  {value?.temp}
                  <span className="sup">o</span>C
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherInfos;
