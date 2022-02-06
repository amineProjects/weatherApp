import { useState, useRef, useEffect } from "react";
import dayjs from "dayjs";

import WeatherIcon from "./WeatherIcon";
import { useFetchData } from "@/hooks/useFetchData";

import "./weatherInfos.scss";

const weatherStatus = {
  Clouds: "Cloudy",
  Thunderstorm: "ThunderStorm",
  Mist: "Fog",
  Smoke: "Fog",
  Haze: "Fog",
  Dust: "Fog",
  Sand: "Fog",
  Ash: "Fog",
  Squall: "Fog",
  Tornado: "Fog",
};

const WeatherInfos = ({ cord, setCurrentWeather }) => {
  const data = useFetchData(cord, "weather", cord.lat);
  const getInfos = (data) => {
    if (!data) {
      return { current: false, daily: false };
    }
    const {
      current: { temp, dt, sunrise, sunset, weather },
      daily,
    } = data;
    setCurrentWeather(
      weatherStatus[weather[0].main]
        ? weatherStatus[weather[0].main]
        : weather[0].main
    );
    return {
      current: {
        day: dayjs(dt * 1000).format("dddd DD MMMM"),
        weather: weatherStatus[weather[0].main]
          ? weatherStatus[weather[0].main]
          : weather[0].main,
        sunrise,
        sunset,
        temp,
      },
      daily: daily.slice(1).map((value) => {
        const { dt, temp, weather } = value;
        return {
          day: dayjs(dt * 1000).format("ddd DD MMM"),
          temp: temp.day,
          weather: weatherStatus[weather[0].main]
            ? weatherStatus[weather[0].main]
            : weather[0].main,
          sunrise,
          sunset,
        };
      }),
    };
  };
  const { current, daily } = getInfos(data);
  console.log("in weather infos", current, daily);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (current && daily) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [current, daily, data]);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div className={`weather weather-${current?.weather}`}>
      <h1 className="cityInfos--title">
        <span>weather</span> forcast
      </h1>

      <div className="info">
        <div className="info--text">
          <div>{current.day}</div>
          <div className="info--temp">
            {current.temp}
            <span className="sup">o</span>C
          </div>
        </div>
        <WeatherIcon statu={current.weather} />
      </div>
      <table className="predictions">
        <tbody>
          {daily.map((value) => {
            return (
              <tr key={value.day}>
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
