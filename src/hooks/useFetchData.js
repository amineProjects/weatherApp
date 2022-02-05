import React, { useEffect, useState } from "react";

import apiUrl from "@/config";
import { CHICAGO, ORAN } from "@/__mock__/weatherApi";

export const useFetchData = (args = null, apiName) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!args) return false;
    if (apiName === "cities") {
      fetch(apiUrl[apiName](args))
        .then((response) => response.json())
        .then((result) => {
          console.log("in useFetchData", JSON.stringify(result, {}, 2));
          setData(result);
        });
    } else {
      console.log("in useFetchData");
      setData(CHICAGO);
    }
  }, [args]);

  return data;
};
