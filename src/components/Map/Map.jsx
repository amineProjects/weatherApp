import { useEffect } from "react";

import "./map.scss";

const MapWrapper = ({ cord: { lat, lon } }) => {
  let map = null;
  useEffect(() => {
    if (!map) {
      map = L.map("map").setView([lat, lon], 10);
    }
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 12,
        minZoom: 9,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: import.meta.env.VITE_MAP_API_KEY,
      }
    ).addTo(map);
    L.marker([lat, lon]).addTo(map);
  }, [map]);
  return <div id="map" className="map"></div>;
};

export default MapWrapper;
