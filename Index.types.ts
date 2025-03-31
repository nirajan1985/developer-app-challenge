export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface District {
  key: string;
  name: string;
  priority: number;
}

export interface Salon {
  id: number;
  name: string;
  address: string;
  postalCode: string;
  postalPlace: string;
  coordinates: Coordinates;
  country: string;
  openingDate: string; // ISO date string
  districts: District[];
}
