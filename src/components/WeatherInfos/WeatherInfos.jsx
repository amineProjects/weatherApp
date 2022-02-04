import { useState, useRef } from "react";
import WeatherIcon from "./WeatherIcon";
import "./weatherInfos.scss";

const weatherPr = [
  { day: "sunday", weather: "sunny", temp: "31" },
  { day: "monday", weather: "clouday", temp: "31" },
  { day: "tuesdya", weather: "sunny", temp: "31" },
  { day: "wednesday", weather: "sunny", temp: "31" },
  { day: "thursday", weather: "sunny", temp: "31" },
  { day: "friday", weather: "sunny", temp: "31" },
  { day: "saturday", weather: "sunny", temp: "31" },
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
          <div>{`Sunny in ${city}, ${country}`}</div>
        </div>
        <WeatherIcon statu="Clear" />
      </div>
      <table className="predictions">
        <tbody>
          {infos.map((value) => {
            return (
              <tr>
                <td className="predictions--cell">{value?.day}</td>
                <td className="predictions--cell">{value?.weather}</td>
                <td className="predictions--cell predictions--cell-last">
                  {value?.temp}
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
