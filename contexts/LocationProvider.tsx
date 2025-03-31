import { createContext, useContext } from "react";
import { useFetchLocation } from "../hooks/useFetchLocation";
import * as Location from "expo-location";

interface LocationProviderProps {
  children: React.ReactNode;
}
interface LocationContextType {
  location: Location.LocationObject | null;
}
export const LocationContext = createContext<LocationContextType | null>(null);

export const LocationProvider = ({ children }: LocationProviderProps) => {
  const { location } = useFetchLocation();
  return (
    <LocationContext.Provider value={{ location }}>
      {children}
    </LocationContext.Provider>
  );
};
