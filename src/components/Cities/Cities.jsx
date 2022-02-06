import { useEffect, useState } from "react";
import Select from "react-select";
import "./cities.scss";
import { useFetchData } from "@/hooks/useFetchData";
import { getCurrentLocation } from "@/utils/geolocation";
import storage from "@/utils/storage";

const Cities = ({ setOpenSelectCity, openSelectCity, setInfo }) => {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const items = useFetchData({ text }, "cities", text)?.["_embedded"][
    "city:search-results"
  ].map((item) => ({
    value: item,
    label: item.matching_full_name,
  }));
  const onInputChange = (txt) => {
    setText(txt);
  };

  const onChange = (item) => {
    console.log(item);
    setValue(item);
    const cityItem = item.value["_embedded"]["city:item"];
    const latlon = cityItem.location.latlon;
    storage.setItem("cityInfo", {
      cord: { lat: latlon.latitude, lon: latlon.longitude },
    });

    setInfo({
      cord: { lat: latlon.latitude, lon: latlon.longitude },
    });

    setOpenSelectCity(false);
  };

  const onClick = () => {
    const setCord = (id) => (data) => {
      storage.setItem(id, { cord: data });

      setInfo({ cord: data });
    };
    getCurrentLocation(setCord("cityInfo"));
    setOpenSelectCity(false);
  };

  return (
    <div className="cities">
      <div className="cities--content">
        <h1 className="cityInfos--title">
          <span>weather</span> frocast
        </h1>
        <button className="btn" onClick={onClick}>
          Get current location
        </button>
        <h2 className="cities--text">or selete a location</h2>
        <Select
          value={value}
          isClearable={true}
          isSearchable={true}
          placeholder="Search..."
          onInputChange={onInputChange}
          onChange={onChange}
          options={items}
        />
      </div>
    </div>
  );
};

export default Cities;
