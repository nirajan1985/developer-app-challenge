import { createContext, useContext } from "react";
import { Salon } from "../Index.types";
import { useFetchData } from "../hooks/useFetchData";

interface SalonProviderProps {
  children: React.ReactNode;
}
interface SalonContextType {
  salons: Salon[] | null;
  setSalons: React.Dispatch<React.SetStateAction<Salon[] | null>>;
}
export const SalonContext = createContext<SalonContextType | null>(null);

export const SalonProvider = ({ children }: SalonProviderProps) => {
  const { data, setData } = useFetchData<Salon[]>(
    "https://api.test.cutters.no/v2/salons"
  );

  return (
    <SalonContext.Provider value={{ salons: data, setSalons: setData }}>
      {children}
    </SalonContext.Provider>
  );
};
