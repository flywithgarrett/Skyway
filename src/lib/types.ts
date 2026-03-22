export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
}

export interface Airline {
  icao: string;
  name: string;
  color: string;
  iata: string;
}

export interface AircraftType {
  icao: string;
  name: string;
}

export interface AirlineHub {
  hub: string;
  routes: string[];
}

export interface Flight {
  id: string;
  airline: Airline;
  origin: Airport;
  destination: Airport;
  aircraft: AircraftType;
  registration: string;
  lat: number;
  lng: number;
  altitude: number;
  speed: number;
  heading: number;
  status: FlightStatus;
  progress: number;
  squawk: string;
  verticalRate: number;
}

export type FlightStatus =
  | "Departing"
  | "Climbing"
  | "En Route"
  | "Descending"
  | "On Approach";
