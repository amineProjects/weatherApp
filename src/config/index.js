const getWeatherApiUrl = ({ lat, lon, exclude = [], units = "metric" }) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${
    import.meta.env.VITE_WEATHER_API_KEY
  }`;
};

const apiUrl = {
  weather: getWeatherApiUrl,
};

export default apiUrl;
