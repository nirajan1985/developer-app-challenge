import { useEffect, useState } from "react";
import * as Location from "expo-location";

export const useFetchLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  const fetchUserLocation = async () => {
    try {
      const res = await Location.requestForegroundPermissionsAsync();
      if (!res.granted) {
        throw new Error("Permission to access location was denied");
        return;
      }
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserLocation();
  }, []);

  return {
    location,
  };
};
