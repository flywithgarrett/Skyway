export interface Airline {
  callsign: string;
  name: string;
  color: string;
  iata: string;
}

export const AIRLINES: Airline[] = [
  { callsign: "UAL", name: "United Airlines", color: "#3B82F6", iata: "UA" },
  { callsign: "DAL", name: "Delta Air Lines", color: "#1E40AF", iata: "DL" },
  { callsign: "AAL", name: "American Airlines", color: "#DC2626", iata: "AA" },
  { callsign: "SWA", name: "Southwest Airlines", color: "#EA580C", iata: "WN" },
  { callsign: "BAW", name: "British Airways", color: "#1E3A5F", iata: "BA" },
  { callsign: "DLH", name: "Lufthansa", color: "#0369A1", iata: "LH" },
  { callsign: "AFR", name: "Air France", color: "#1E3A8A", iata: "AF" },
  { callsign: "UAE", name: "Emirates", color: "#B91C1C", iata: "EK" },
  { callsign: "QFA", name: "Qantas", color: "#DC2626", iata: "QF" },
  { callsign: "SIA", name: "Singapore Airlines", color: "#CA8A04", iata: "SQ" },
  { callsign: "ANA", name: "ANA", color: "#1D4ED8", iata: "NH" },
  { callsign: "JAL", name: "Japan Airlines", color: "#B91C1C", iata: "JL" },
  { callsign: "KLM", name: "KLM", color: "#2563EB", iata: "KL" },
  { callsign: "THY", name: "Turkish Airlines", color: "#DC2626", iata: "TK" },
  { callsign: "CPA", name: "Cathay Pacific", color: "#047857", iata: "CX" },
  { callsign: "RYR", name: "Ryanair", color: "#1D4ED8", iata: "FR" },
  { callsign: "ACA", name: "Air Canada", color: "#DC2626", iata: "AC" },
  { callsign: "JBU", name: "JetBlue", color: "#2563EB", iata: "B6" },
];

export interface AircraftType {
  code: string;
  name: string;
}

export const HUBS: Record<string, { hub: string; routes: string[] }> = {
  UA: { hub: "KORD", routes: ["KLAX", "KSFO", "KDEN", "KEWR", "KIAH", "KBOS", "KSEA", "KDFW", "KMIA", "KJFK", "KATL", "KPHL", "KMSP"] },
  DL: { hub: "KATL", routes: ["KJFK", "KLAX", "KORD", "KMSP", "KDTW", "KSEA", "KBOS", "KSFO", "KMIA", "KDFW"] },
  AA: { hub: "KDFW", routes: ["KJFK", "KLAX", "KORD", "KMIA", "KCLT", "KPHL", "KBOS", "KDEN", "KSFO", "KPHX"] },
  WN: { hub: "KDFW", routes: ["KLAS", "KDEN", "KPHX", "KMDW", "KBWI", "KHOU", "KATL", "KMCO", "KLAX", "KOAK"] },
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
  FR: { hub: "EGLL", routes: ["LEMD", "LFPG", "LIRF", "EDDF", "EHAM", "LTFM"] },
  AC: { hub: "KORD", routes: ["EGLL", "LFPG", "RJTT", "KLAX", "KJFK", "KBOS", "KSFO"] },
  B6: { hub: "KJFK", routes: ["KLAX", "KSFO", "KBOS", "KMIA", "KFLL", "KMCO", "KSEA", "KORD"] },
};

export const FLEET: Record<string, { aircraft: AircraftType[]; regPrefix: string }> = {
  UA: { aircraft: [{ code: "B738", name: "Boeing 737-800" }, { code: "B39M", name: "Boeing 737 MAX 9" }, { code: "B77W", name: "Boeing 777-300ER" }, { code: "B789", name: "Boeing 787-9" }, { code: "A321", name: "Airbus A321neo" }], regPrefix: "N" },
  DL: { aircraft: [{ code: "B738", name: "Boeing 737-800" }, { code: "A321", name: "Airbus A321neo" }, { code: "A339", name: "Airbus A330-900neo" }, { code: "A359", name: "Airbus A350-900" }, { code: "B763", name: "Boeing 767-300ER" }], regPrefix: "N" },
  AA: { aircraft: [{ code: "B738", name: "Boeing 737-800" }, { code: "A321", name: "Airbus A321neo" }, { code: "B77W", name: "Boeing 777-300ER" }, { code: "B789", name: "Boeing 787-9" }, { code: "A320", name: "Airbus A320" }], regPrefix: "N" },
  WN: { aircraft: [{ code: "B738", name: "Boeing 737-800" }, { code: "B39M", name: "Boeing 737 MAX 8" }], regPrefix: "N" },
  BA: { aircraft: [{ code: "B77W", name: "Boeing 777-300ER" }, { code: "A388", name: "Airbus A380-800" }, { code: "B789", name: "Boeing 787-9" }, { code: "A321", name: "Airbus A321neo" }, { code: "A359", name: "Airbus A350-1000" }], regPrefix: "G-" },
  LH: { aircraft: [{ code: "A320", name: "Airbus A320neo" }, { code: "A359", name: "Airbus A350-900" }, { code: "B744", name: "Boeing 747-400" }, { code: "A321", name: "Airbus A321neo" }, { code: "B789", name: "Boeing 787-9" }], regPrefix: "D-" },
  AF: { aircraft: [{ code: "A320", name: "Airbus A320" }, { code: "A359", name: "Airbus A350-900" }, { code: "B77W", name: "Boeing 777-300ER" }, { code: "A321", name: "Airbus A321" }], regPrefix: "F-" },
  EK: { aircraft: [{ code: "B77W", name: "Boeing 777-300ER" }, { code: "A388", name: "Airbus A380-800" }], regPrefix: "A6-" },
  QF: { aircraft: [{ code: "B738", name: "Boeing 737-800" }, { code: "A388", name: "Airbus A380-800" }, { code: "B789", name: "Boeing 787-9" }], regPrefix: "VH-" },
  SQ: { aircraft: [{ code: "B77W", name: "Boeing 777-300ER" }, { code: "A388", name: "Airbus A380-800" }, { code: "A359", name: "Airbus A350-900" }, { code: "B789", name: "Boeing 787-10" }], regPrefix: "9V-" },
  NH: { aircraft: [{ code: "B77W", name: "Boeing 777-300ER" }, { code: "B789", name: "Boeing 787-9" }, { code: "A321", name: "Airbus A321neo" }], regPrefix: "JA" },
  JL: { aircraft: [{ code: "B77W", name: "Boeing 777-300ER" }, { code: "B789", name: "Boeing 787-9" }, { code: "A359", name: "Airbus A350-900" }], regPrefix: "JA" },
  KL: { aircraft: [{ code: "B77W", name: "Boeing 777-300ER" }, { code: "B789", name: "Boeing 787-9" }, { code: "A321", name: "Airbus A321neo" }, { code: "B738", name: "Boeing 737-800" }], regPrefix: "PH-" },
  TK: { aircraft: [{ code: "B77W", name: "Boeing 777-300ER" }, { code: "A321", name: "Airbus A321neo" }, { code: "B789", name: "Boeing 787-9" }, { code: "A359", name: "Airbus A350-900" }], regPrefix: "TC-" },
  CX: { aircraft: [{ code: "B77W", name: "Boeing 777-300ER" }, { code: "A359", name: "Airbus A350-900" }, { code: "A321", name: "Airbus A321neo" }], regPrefix: "B-" },
  FR: { aircraft: [{ code: "B738", name: "Boeing 737-800" }, { code: "B39M", name: "Boeing 737 MAX 8" }], regPrefix: "EI-" },
  AC: { aircraft: [{ code: "B77W", name: "Boeing 777-300ER" }, { code: "B789", name: "Boeing 787-9" }, { code: "A321", name: "Airbus A321neo" }, { code: "B738", name: "Boeing 737-800" }], regPrefix: "C-" },
  B6: { aircraft: [{ code: "A320", name: "Airbus A320" }, { code: "A321", name: "Airbus A321neo" }, { code: "E190", name: "Embraer E190" }], regPrefix: "N" },
};
