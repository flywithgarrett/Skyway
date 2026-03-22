"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import type { Flight } from "@/lib/types";

function isEmergency(flight: Flight): boolean {
  return flight.squawk === "7700" || flight.squawk === "7600" || flight.squawk === "7500";
}

function createAircraftIcon(heading: number, emergency: boolean, selected: boolean): L.DivIcon {
  const size = selected ? 26 : 17;
  const color = emergency
    ? "rgb(255,64,88)"
    : selected
      ? "rgb(92,200,240)"
      : "rgb(220,240,255)";
  const shadow = emergency
    ? "0 0 4px rgba(255,64,88,.7)"
    : selected
      ? "0 0 6px rgba(92,200,240,.7)"
      : "0 0 3px rgba(180,220,255,.4)";

  return L.divIcon({
    html: `<div style="width:${size}px;height:${size}px;transform:rotate(${heading}deg);filter:drop-shadow(${shadow})">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}">
        <path d="M21 16v-2l-8-5V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="${color}"/>
      </svg>
    </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    className: "",
  });
}

interface FlightMarkerProps {
  flight: Flight;
  map: L.Map;
  selected: boolean;
  onClick: (flight: Flight) => void;
}

export default function FlightMarker({ flight, map, selected, onClick }: FlightMarkerProps) {
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    const emergency = isEmergency(flight);
    const icon = createAircraftIcon(flight.heading, emergency, selected);

    if (!markerRef.current) {
      markerRef.current = L.marker([flight.lat, flight.lng], { icon })
        .addTo(map)
        .on("click", () => onClick(flight));
    } else {
      markerRef.current.setLatLng([flight.lat, flight.lng]);
      markerRef.current.setIcon(icon);
    }

    return () => {
      if (markerRef.current) {
        markerRef.current.remove();
        markerRef.current = null;
      }
    };
  }, [flight, map, selected, onClick]);

  return null;
}
