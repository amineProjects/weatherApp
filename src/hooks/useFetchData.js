import React, { useEffect, useState } from "react";

import apiUrl from "@/config";
import { CHICAGO, ORAN } from "@/__mock__/weatherApi";

export const useFetchData = (args = null, apiName, condition) => {
  console.log("in useFetchData", args);
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!condition) return false;
    fetch(apiUrl[apiName](args))
      .then((response) => response.json())
      .then((result) => {
        console.log("in useFetchData", JSON.stringify(result, {}, 2));
        setData(result);
      });
  }, [condition]);

  return data;
};
