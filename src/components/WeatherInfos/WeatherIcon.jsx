import { useRef, useEffect } from "react";
import {
  AnimatedWeatherIcon,
  AnimatedWeatherTypes,
  AnimatedWeatherTimes,
} from "animated-weather-icon";

import "./weatherIcon.scss";

const WeatherIcon = ({ statu = "Clear" }) => {
  const iconRef = useRef(null);
  const d = new Date();
  let hour = d.getHours();
  let icon = null;
  useEffect(() => {
    icon = new AnimatedWeatherIcon(iconRef.current);
  }, []);
  useEffect(() => {
    if (icon) {
      icon.setType(
        AnimatedWeatherTypes[statu],
        AnimatedWeatherTimes[hour <= 12 ? "Day" : "Night"]
      );
    }
  }, [statu, hour]);

  return <i ref={iconRef} className="info--icon"></i>;
};

export default WeatherIcon;
