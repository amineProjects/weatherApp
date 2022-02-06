const getWeatherApiUrl = ({ lat, lon, exclude = [], units = "metric" }) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${
    import.meta.env.VITE_WEATHER_API_KEY
  }`;
};

const getcitiesApiUrl = ({ text }) => {
  return `https://api.teleport.org/api/cities/?search=${text}&embed=city%3Asearch-results%2Fcity%3Aitem`;
};

const apiUrl = {
  weather: getWeatherApiUrl,
  cities: getcitiesApiUrl,
};

export default apiUrl;
