import { Airport, AIRPORT_MAP, AIRPORTS } from "./airports";
import { Airline, AircraftType, AIRLINES, FLEET, HUBS } from "./airlines";

export interface Flight {
  id: string;
  airline: Airline;
  origin: Airport;
  destination: Airport;
  aircraft: AircraftType;
  lat: number;
  lng: number;
  altitude: number;
  speed: number;
  heading: number;
  status: string;
  progress: number;
  squawk: string;
  verticalRate: number;
  registration: string;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateFlights(count: number = 1000): Flight[] {
  const flights: Flight[] = [];

  for (let i = 0; i < count; i++) {
    const airline = pick(AIRLINES);
    const hub = HUBS[airline.iata];
    if (!hub) continue;

    const hubAP = AIRPORT_MAP[hub.hub];
    if (!hubAP) continue;

    const destCode = pick(hub.routes);
    const destAP = AIRPORT_MAP[destCode];
    if (!destAP) continue;

    const outbound = Math.random() > 0.5;
    const origin = outbound ? hubAP : destAP;
    const dest = outbound ? destAP : hubAP;

    const fleet = FLEET[airline.iata];
    const aircraft = fleet
      ? pick(fleet.aircraft)
      : { code: "B738", name: "Boeing 737-800" };
    const regPrefix = fleet ? fleet.regPrefix : "N";

    const progress = Math.random();
    const lat = Math.max(
      -72,
      Math.min(
        72,
        origin.lat +
          (dest.lat - origin.lat) * progress +
          (Math.random() - 0.5) * 2
      )
    );
    const lng =
      ((origin.lng +
        (dest.lng - origin.lng) * progress +
        (Math.random() - 0.5) * 2 +
        180) %
        360) -
      180;

    const altitude = Math.floor(8000 + Math.random() * 34000);
    const speed =
      altitude > 25000
        ? Math.floor(420 + Math.random() * 130)
        : Math.floor(180 + Math.random() * 250);

    const isEmergency = Math.random() < 0.005;
    let status: string;
    if (progress < 0.08) status = "Departing";
    else if (progress > 0.92) status = "On Approach";
    else if (progress < 0.2 && altitude < 20000) status = "Climbing";
    else if (progress > 0.8 && altitude < 20000) status = "Descending";
    else status = "En Route";

    flights.push({
      id: `${airline.iata}${Math.floor(Math.random() * 9000 + 100)}`,
      airline,
      origin,
      destination: dest,
      aircraft,
      lat,
      lng,
      altitude,
      speed,
      heading:
        (Math.floor(
          (Math.atan2(dest.lng - origin.lng, dest.lat - origin.lat) * 180) /
            Math.PI
        ) +
          360) %
        360,
      status,
      progress: Math.floor(progress * 100),
      squawk: isEmergency
        ? pick(["7700", "7600", "7500"])
        : `${2000 + Math.floor(Math.random() * 4700)}`,
      verticalRate:
        status === "Climbing"
          ? Math.floor(Math.random() * 2500 + 500)
          : status === "Descending"
          ? -Math.floor(Math.random() * 2000 + 300)
          : Math.floor((Math.random() - 0.5) * 400),
      registration: `${regPrefix}${100 + Math.floor(Math.random() * 899)}`,
    });
  }

  return flights;
}

export function updateFlightPositions(flights: Flight[]): void {
  flights.forEach((f) => {
    f.lat = Math.max(-72, Math.min(72, f.lat + (Math.random() - 0.48) * 0.018));
    f.lng = ((f.lng + (Math.random() - 0.48) * 0.025 + 180) % 360) - 180;
    f.altitude = Math.max(
      5000,
      Math.min(42000, f.altitude + Math.floor((Math.random() - 0.5) * 50))
    );
    f.speed = Math.max(
      200,
      Math.min(580, f.speed + Math.floor((Math.random() - 0.5) * 3))
    );
    f.heading = (f.heading + Math.floor((Math.random() - 0.5) * 2) + 360) % 360;
  });
}

export function isEmergency(flight: Flight): boolean {
  return ["7700", "7600", "7500"].includes(flight.squawk);
}
