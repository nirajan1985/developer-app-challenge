import { useContext } from "react";
import { SalonContext } from "../contexts/SalonProvider";

export const useSalon = () => {
  const context = useContext(SalonContext);
  if (!context) throw new Error("useSalon must be used within SalonProvier");
  return context;
};
