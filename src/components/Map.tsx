"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Flight } from "@/lib/types";
import { AIRPORTS, generateFlights } from "@/lib/data";
import FlightMarker from "./FlightMarker";

export default function Map() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      zoomControl: false,
      attributionControl: false,
      minZoom: 2,
      maxZoom: 15,
    }).setView([30, -20], 3);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      subdomains: "abcd",
    }).addTo(map);

    // Airport markers
    AIRPORTS.forEach((airport) => {
      const marker = L.marker([airport.lat, airport.lng], {
        icon: L.divIcon({
          html: `<div style="width:10px;height:10px;border-radius:50%;background:#5cc8f0;border:2px solid #0f1f3a;box-shadow:0 0 10px #3bb8e855"></div>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
          className: "",
        }),
      }).addTo(map);

      marker.bindTooltip(airport.code, { direction: "top", offset: [0, -10] });
    });

    mapRef.current = map;
    setMapReady(true);

    // Generate initial flights
    setFlights(generateFlights(800));

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update flight positions periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setFlights((prev) =>
        prev.map((f) => ({
          ...f,
          lat: Math.max(-72, Math.min(72, f.lat + (Math.random() - 0.48) * 0.018)),
          lng: ((f.lng + (Math.random() - 0.48) * 0.025 + 180) % 360) - 180,
          altitude: Math.max(5000, Math.min(42000, f.altitude + Math.floor((Math.random() - 0.5) * 50))),
          speed: Math.max(200, Math.min(580, f.speed + Math.floor((Math.random() - 0.5) * 3))),
          heading: (f.heading + Math.floor((Math.random() - 0.5) * 2) + 360) % 360,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleFlightClick = useCallback((flight: Flight) => {
    setSelectedFlight(flight);
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainerRef} className="absolute inset-0" />

      {/* Flight count overlay */}
      <div className="absolute top-4 left-4 z-[1000] bg-black/60 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10">
        <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">
          SkyWay
        </span>
        <span className="ml-3 text-xs text-cyan-400 font-mono">
          {flights.length} flights
        </span>
      </div>

      {/* Render flight markers */}
      {mapReady &&
        mapRef.current &&
        flights.map((flight) => (
          <FlightMarker
            key={flight.id}
            flight={flight}
            map={mapRef.current!}
            selected={selectedFlight?.id === flight.id}
            onClick={handleFlightClick}
          />
        ))}
    </div>
  );
}
