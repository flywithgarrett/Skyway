import type {
  Airport,
  Airline,
  AircraftType,
  AirlineHub,
  Flight,
  FlightStatus,
} from "./types";

// ── Airports ─────────────────────────────────────────────────────────
export const AIRPORTS: Airport[] = [
  { code: "KJFK", name: "John F. Kennedy Intl", city: "New York", country: "US", lat: 40.64, lng: -73.78 },
  { code: "KLAX", name: "Los Angeles Intl", city: "Los Angeles", country: "US", lat: 33.94, lng: -118.41 },
  { code: "KORD", name: "O'Hare Intl", city: "Chicago", country: "US", lat: 41.97, lng: -87.91 },
  { code: "KATL", name: "Hartsfield-Jackson", city: "Atlanta", country: "US", lat: 33.64, lng: -84.43 },
  { code: "KDFW", name: "Dallas/Fort Worth", city: "Dallas", country: "US", lat: 32.9, lng: -97.04 },
  { code: "KDEN", name: "Denver Intl", city: "Denver", country: "US", lat: 39.86, lng: -104.67 },
  { code: "KSFO", name: "San Francisco Intl", city: "San Francisco", country: "US", lat: 37.62, lng: -122.38 },
  { code: "KMIA", name: "Miami Intl", city: "Miami", country: "US", lat: 25.8, lng: -80.29 },
  { code: "KBOS", name: "Logan Intl", city: "Boston", country: "US", lat: 42.37, lng: -71.02 },
  { code: "KSEA", name: "Seattle-Tacoma", city: "Seattle", country: "US", lat: 47.45, lng: -122.31 },
  { code: "KEWR", name: "Newark Liberty", city: "Newark", country: "US", lat: 40.69, lng: -74.17 },
  { code: "KMSP", name: "Minneapolis-St Paul", city: "Minneapolis", country: "US", lat: 44.88, lng: -93.22 },
  { code: "KDTW", name: "Detroit Metro", city: "Detroit", country: "US", lat: 42.21, lng: -83.35 },
  { code: "KPHL", name: "Philadelphia Intl", city: "Philadelphia", country: "US", lat: 39.87, lng: -75.24 },
  { code: "EGLL", name: "London Heathrow", city: "London", country: "UK", lat: 51.47, lng: -0.45 },
  { code: "LFPG", name: "Charles de Gaulle", city: "Paris", country: "FR", lat: 49.01, lng: 2.55 },
  { code: "EDDF", name: "Frankfurt", city: "Frankfurt", country: "DE", lat: 50.04, lng: 8.56 },
  { code: "EHAM", name: "Schiphol", city: "Amsterdam", country: "NL", lat: 52.31, lng: 4.76 },
  { code: "RJTT", name: "Haneda", city: "Tokyo", country: "JP", lat: 35.55, lng: 139.78 },
  { code: "VHHH", name: "Hong Kong Intl", city: "Hong Kong", country: "HK", lat: 22.31, lng: 113.92 },
  { code: "OMDB", name: "Dubai Intl", city: "Dubai", country: "AE", lat: 25.25, lng: 55.36 },
  { code: "WSSS", name: "Changi", city: "Singapore", country: "SG", lat: 1.35, lng: 103.99 },
  { code: "YSSY", name: "Sydney", city: "Sydney", country: "AU", lat: -33.95, lng: 151.18 },
  { code: "SBGR", name: "Guarulhos", city: "São Paulo", country: "BR", lat: -23.44, lng: -46.47 },
  { code: "FAOR", name: "O.R. Tambo", city: "Johannesburg", country: "ZA", lat: -26.14, lng: 28.25 },
  { code: "LTFM", name: "Istanbul Airport", city: "Istanbul", country: "TR", lat: 41.26, lng: 28.74 },
  { code: "ZBAA", name: "Beijing Capital", city: "Beijing", country: "CN", lat: 40.08, lng: 116.6 },
];

// ── Airlines ─────────────────────────────────────────────────────────
export const AIRLINES: Airline[] = [
  { icao: "UAL", name: "United Airlines", color: "#3B82F6", iata: "UA" },
  { icao: "DAL", name: "Delta Air Lines", color: "#1E40AF", iata: "DL" },
  { icao: "AAL", name: "American Airlines", color: "#DC2626", iata: "AA" },
  { icao: "SWA", name: "Southwest Airlines", color: "#EA580C", iata: "WN" },
  { icao: "BAW", name: "British Airways", color: "#1E3A5F", iata: "BA" },
  { icao: "DLH", name: "Lufthansa", color: "#0369A1", iata: "LH" },
  { icao: "AFR", name: "Air France", color: "#1E3A8A", iata: "AF" },
  { icao: "UAE", name: "Emirates", color: "#B91C1C", iata: "EK" },
  { icao: "QFA", name: "Qantas", color: "#DC2626", iata: "QF" },
  { icao: "SIA", name: "Singapore Airlines", color: "#CA8A04", iata: "SQ" },
  { icao: "ANA", name: "ANA", color: "#1D4ED8", iata: "NH" },
  { icao: "JAL", name: "Japan Airlines", color: "#B91C1C", iata: "JL" },
  { icao: "KLM", name: "KLM", color: "#2563EB", iata: "KL" },
  { icao: "THY", name: "Turkish Airlines", color: "#DC2626", iata: "TK" },
  { icao: "CPA", name: "Cathay Pacific", color: "#047857", iata: "CX" },
  { icao: "ACA", name: "Air Canada", color: "#DC2626", iata: "AC" },
  { icao: "JBU", name: "JetBlue", color: "#2563EB", iata: "B6" },
];

// ── Hubs & Routes ────────────────────────────────────────────────────
export const HUBS: Record<string, AirlineHub> = {
  UA: { hub: "KORD", routes: ["KLAX", "KSFO", "KDEN", "KEWR", "KBOS", "KSEA", "KDFW", "KMIA", "KJFK", "KATL", "KMSP"] },
  DL: { hub: "KATL", routes: ["KJFK", "KLAX", "KORD", "KMSP", "KDTW", "KSEA", "KBOS", "KSFO", "KMIA", "KDFW"] },
  AA: { hub: "KDFW", routes: ["KJFK", "KLAX", "KORD", "KMIA", "KPHL", "KBOS", "KDEN", "KSFO"] },
  WN: { hub: "KDFW", routes: ["KDEN", "KBOS", "KATL", "KLAX"] },
  BA: { hub: "EGLL", routes: ["KJFK", "KLAX", "KORD", "OMDB", "WSSS", "VHHH", "RJTT", "YSSY"] },
  LH: { hub: "EDDF", routes: ["KJFK", "KORD", "KLAX", "RJTT", "VHHH", "OMDB", "SBGR", "EGLL"] },
  AF: { hub: "LFPG", routes: ["KJFK", "KLAX", "RJTT", "OMDB", "FAOR", "SBGR", "EGLL", "EHAM"] },
  EK: { hub: "OMDB", routes: ["KJFK", "KLAX", "EGLL", "LFPG", "RJTT", "YSSY", "WSSS", "VHHH", "SBGR", "FAOR"] },
  QF: { hub: "YSSY", routes: ["KLAX", "EGLL", "WSSS", "RJTT", "VHHH", "OMDB"] },
  SQ: { hub: "WSSS", routes: ["EGLL", "KJFK", "RJTT", "YSSY", "OMDB", "VHHH", "ZBAA"] },
  NH: { hub: "RJTT", routes: ["KLAX", "KJFK", "KORD", "EGLL", "WSSS", "VHHH"] },
  JL: { hub: "RJTT", routes: ["KLAX", "KJFK", "EGLL", "WSSS", "VHHH", "YSSY"] },
  KL: { hub: "EHAM", routes: ["KJFK", "KLAX", "KORD", "RJTT", "WSSS", "OMDB", "SBGR", "FAOR"] },
  TK: { hub: "LTFM", routes: ["KJFK", "KLAX", "EGLL", "LFPG", "OMDB", "RJTT", "FAOR"] },
  CX: { hub: "VHHH", routes: ["EGLL", "KJFK", "KLAX", "RJTT", "YSSY", "WSSS"] },
  AC: { hub: "KORD", routes: ["EGLL", "LFPG", "RJTT", "KLAX", "KJFK", "KBOS", "KSFO"] },
  B6: { hub: "KJFK", routes: ["KLAX", "KSFO", "KBOS", "KMIA", "KSEA", "KORD"] },
};

// ── Fleet ────────────────────────────────────────────────────────────
const FLEET: Record<string, { aircraft: AircraftType[]; regPrefix: string }> = {
  UA: { aircraft: [{ icao: "B738", name: "Boeing 737-800" }, { icao: "B77W", name: "Boeing 777-300ER" }, { icao: "B789", name: "Boeing 787-9" }], regPrefix: "N" },
  DL: { aircraft: [{ icao: "B738", name: "Boeing 737-800" }, { icao: "A321", name: "Airbus A321neo" }, { icao: "A359", name: "Airbus A350-900" }], regPrefix: "N" },
  AA: { aircraft: [{ icao: "B738", name: "Boeing 737-800" }, { icao: "A321", name: "Airbus A321neo" }, { icao: "B77W", name: "Boeing 777-300ER" }], regPrefix: "N" },
  WN: { aircraft: [{ icao: "B738", name: "Boeing 737-800" }, { icao: "B39M", name: "Boeing 737 MAX 8" }], regPrefix: "N" },
  BA: { aircraft: [{ icao: "B77W", name: "Boeing 777-300ER" }, { icao: "A388", name: "Airbus A380-800" }, { icao: "B789", name: "Boeing 787-9" }], regPrefix: "G-" },
  LH: { aircraft: [{ icao: "A320", name: "Airbus A320neo" }, { icao: "A359", name: "Airbus A350-900" }, { icao: "B789", name: "Boeing 787-9" }], regPrefix: "D-" },
  AF: { aircraft: [{ icao: "A320", name: "Airbus A320" }, { icao: "A359", name: "Airbus A350-900" }, { icao: "B77W", name: "Boeing 777-300ER" }], regPrefix: "F-" },
  EK: { aircraft: [{ icao: "B77W", name: "Boeing 777-300ER" }, { icao: "A388", name: "Airbus A380-800" }], regPrefix: "A6-" },
  QF: { aircraft: [{ icao: "B738", name: "Boeing 737-800" }, { icao: "A388", name: "Airbus A380-800" }, { icao: "B789", name: "Boeing 787-9" }], regPrefix: "VH-" },
  SQ: { aircraft: [{ icao: "B77W", name: "Boeing 777-300ER" }, { icao: "A388", name: "Airbus A380-800" }, { icao: "A359", name: "Airbus A350-900" }], regPrefix: "9V-" },
  NH: { aircraft: [{ icao: "B77W", name: "Boeing 777-300ER" }, { icao: "B789", name: "Boeing 787-9" }], regPrefix: "JA" },
  JL: { aircraft: [{ icao: "B77W", name: "Boeing 777-300ER" }, { icao: "B789", name: "Boeing 787-9" }, { icao: "A359", name: "Airbus A350-900" }], regPrefix: "JA" },
  KL: { aircraft: [{ icao: "B77W", name: "Boeing 777-300ER" }, { icao: "B789", name: "Boeing 787-9" }, { icao: "B738", name: "Boeing 737-800" }], regPrefix: "PH-" },
  TK: { aircraft: [{ icao: "B77W", name: "Boeing 777-300ER" }, { icao: "A321", name: "Airbus A321neo" }, { icao: "B789", name: "Boeing 787-9" }], regPrefix: "TC-" },
  CX: { aircraft: [{ icao: "B77W", name: "Boeing 777-300ER" }, { icao: "A359", name: "Airbus A350-900" }], regPrefix: "B-" },
  AC: { aircraft: [{ icao: "B77W", name: "Boeing 777-300ER" }, { icao: "B789", name: "Boeing 787-9" }, { icao: "A321", name: "Airbus A321neo" }], regPrefix: "C-" },
  B6: { aircraft: [{ icao: "A320", name: "Airbus A320" }, { icao: "A321", name: "Airbus A321neo" }], regPrefix: "N" },
};

// ── Helpers ───────────────────────────────────────────────────────────
function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const airportMap = new Map<string, Airport>();
AIRPORTS.forEach((a) => airportMap.set(a.code, a));

export function getAirport(code: string): Airport | undefined {
  return airportMap.get(code);
}

// ── Flight Generator ─────────────────────────────────────────────────
export function generateFlights(count: number = 800): Flight[] {
  const flights: Flight[] = [];

  for (let i = 0; i < count; i++) {
    const airline = pick(AIRLINES);
    const hub = HUBS[airline.iata];
    if (!hub) continue;

    const hubAirport = airportMap.get(hub.hub);
    if (!hubAirport) continue;

    const destCode = pick(hub.routes);
    const destAirport = airportMap.get(destCode);
    if (!destAirport) continue;

    // Randomize direction (outbound or inbound)
    const outbound = Math.random() > 0.5;
    const origin = outbound ? hubAirport : destAirport;
    const dest = outbound ? destAirport : hubAirport;

    // Pick aircraft from fleet
    const fleet = FLEET[airline.iata];
    const aircraft = fleet
      ? pick(fleet.aircraft)
      : { icao: "B738", name: "Boeing 737-800" };
    const regPrefix = fleet ? fleet.regPrefix : "N";

    // Position along route
    const progress = Math.random();
    const lat = origin.lat + (dest.lat - origin.lat) * progress + (Math.random() - 0.5) * 2;
    const lng = origin.lng + (dest.lng - origin.lng) * progress + (Math.random() - 0.5) * 2;

    const altitude = Math.floor(8000 + Math.random() * 34000);
    const speed = altitude > 25000
      ? Math.floor(420 + Math.random() * 130)
      : Math.floor(180 + Math.random() * 250);

    // Determine flight status
    let status: FlightStatus;
    if (progress < 0.08) status = "Departing";
    else if (progress > 0.92) status = "On Approach";
    else if (progress < 0.2 && altitude < 20000) status = "Climbing";
    else if (progress > 0.8 && altitude < 20000) status = "Descending";
    else status = "En Route";

    // Emergency squawk ~0.5% of flights
    const isEmergency = Math.random() < 0.005;
    const squawk = isEmergency
      ? pick(["7700", "7600", "7500"])
      : `${2000 + Math.floor(Math.random() * 4700)}`;

    // Vertical rate based on status
    const verticalRate =
      status === "Climbing" ? Math.floor(Math.random() * 2500 + 500) :
      status === "Descending" ? -Math.floor(Math.random() * 2000 + 300) :
      Math.floor((Math.random() - 0.5) * 400);

    const heading = Math.floor(
      (Math.atan2(dest.lng - origin.lng, dest.lat - origin.lat) * 180) / Math.PI + 360
    ) % 360;

    flights.push({
      id: `${airline.iata}${Math.floor(Math.random() * 9000 + 100)}`,
      airline,
      origin,
      destination: dest,
      aircraft,
      registration: `${regPrefix}${100 + Math.floor(Math.random() * 899)}`,
      lat: Math.max(-72, Math.min(72, lat)),
      lng: ((lng + 180) % 360) - 180,
      altitude,
      speed,
      heading,
      status,
      progress: Math.floor(progress * 100),
      squawk,
      verticalRate,
    });
  }

  return flights;
}
