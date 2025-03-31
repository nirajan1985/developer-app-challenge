import { useEffect, useState } from "react";
import { Salon } from "../Index.types";

export const useFetchData = <T>(apiUrl: string) => {
  const [data, setData] = useState<T | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error(`Could not fetch data due to http error ${res.status}`);
        return;
      }
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    setData,
  };
};
