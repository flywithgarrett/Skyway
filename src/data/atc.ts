import { AIRLINES } from "./airlines";

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export interface ATCMessage {
  type: string;
  callsign: string;
  time: string;
  message: string;
}

const ATC_TEMPLATES = [
  {
    type: "tower",
    generate: (cs: string) =>
      `${cs}, runway ${pick(["28L", "09R", "25L", "33L", "04R"])} cleared for takeoff, wind ${pick(["270", "360", "180", "090"])} at ${5 + Math.floor(Math.random() * 18)}`,
  },
  {
    type: "tower",
    generate: (cs: string) =>
      `${cs}, cleared to land runway ${pick(["28L", "09R", "25L"])}, wind ${pick(["calm", "270 at 8", "180 at 6"])}`,
  },
  {
    type: "approach",
    generate: (cs: string) =>
      `${cs}, descend and maintain FL${Math.floor(Math.random() * 15 + 18) * 10}, expect ILS runway ${pick(["25L", "28R", "09L"])}`,
  },
  {
    type: "approach",
    generate: (cs: string) =>
      `${cs}, turn ${pick(["left", "right"])} heading ${(Math.floor(Math.random() * 36) + 1) * 10}, vectors ILS ${pick(["25L", "28R"])}`,
  },
  {
    type: "ground",
    generate: (cs: string) =>
      `${cs}, taxi to runway ${pick(["28L", "04R", "09L"])} via ${pick(["Alpha, Bravo, Charlie", "Kilo, Lima", "Echo, Foxtrot, Golf"])}`,
  },
  {
    type: "center",
    generate: (cs: string) =>
      `${cs}, contact ${pick(["New York", "Atlanta", "Chicago", "Denver", "Houston", "Seattle"])} Center on ${124 + Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 40 * 25).toString().padStart(3, "0")}`,
  },
  {
    type: "departure",
    generate: (cs: string) =>
      `${cs}, radar contact, climb FL${Math.floor(Math.random() * 10 + 28) * 10}, turn ${pick(["left", "right"])} heading ${(Math.floor(Math.random() * 36) + 1) * 10}`,
  },
];

export function generateATCMessage(): ATCMessage {
  const template = pick(ATC_TEMPLATES);
  const airline = pick(AIRLINES);
  const callsign = `${airline.iata}${100 + Math.floor(Math.random() * 900)}`;
  const now = new Date();
  const time = `${now.getUTCHours().toString().padStart(2, "0")}:${now.getUTCMinutes().toString().padStart(2, "0")}:${now.getUTCSeconds().toString().padStart(2, "0")}`;

  return {
    type: template.type,
    callsign,
    time,
    message: template.generate(callsign),
  };
}

export const ATC_TYPE_COLORS: Record<string, string> = {
  tower: "#ff4058",
  approach: "#4494f8",
  ground: "#eda630",
  center: "#a78bfa",
  departure: "#ec4899",
};
