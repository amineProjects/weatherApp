import { useEffect, useState } from "react";
import Autocomplete from "react-autocomplete";
import "cities.scss";
import { useFetchData } from "@/hooks/useFetchData";

const Cities = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [seletedValue, setSeletedValue] = useState("");

  const getValue = (item) => {
    return item.matching_full_name;
  };

  const onChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setItems(
      useFetchData({ text: value })?.["_embedded"]["city:search-results"]
    );
  };

  const onSelect = (val) => {
    setSeletedValue(val);
  };

  return (
    <Autocomplete
      getItemValue={getValue}
      items={items}
      renderItem={(item, isHighlighted) => (
        <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
          {item.label}
        </div>
      )}
      value={value}
      onChange={onChange}
      onSelect={onSelect}
    />
  );
};

export default Cities;
