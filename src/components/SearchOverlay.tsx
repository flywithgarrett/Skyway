"use client";

import { useState, useCallback } from "react";
import { Flight, isEmergency } from "@/data/flights";
import { Airport, AIRPORTS } from "@/data/airports";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
  flights: Flight[];
  onSelectFlight: (flight: Flight) => void;
  onSelectAirport: (airport: Airport) => void;
}

export default function SearchOverlay({
  open,
  onClose,
  flights,
  onSelectFlight,
  onSelectAirport,
}: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  if (!open) return null;

  const q = query.toLowerCase();
  const matchedAirports = q
    ? AIRPORTS.filter(
        (a) =>
          a.code.toLowerCase().includes(q) ||
          a.name.toLowerCase().includes(q) ||
          a.city.toLowerCase().includes(q)
      ).slice(0, 5)
    : [];

  const matchedFlights = q
    ? flights
        .filter(
          (f) =>
            f.id.toLowerCase().includes(q) ||
            f.origin.code.toLowerCase().includes(q) ||
            f.destination.code.toLowerCase().includes(q) ||
            f.airline.name.toLowerCase().includes(q) ||
            f.origin.city.toLowerCase().includes(q) ||
            f.aircraft.code.toLowerCase().includes(q)
        )
        .slice(0, 12)
    : [];

  return (
    <div
      className="fixed inset-0 z-[2000] flex flex-col"
      style={{
        background: "rgba(8,14,26,0.97)",
        backdropFilter: "blur(24px)",
      }}
    >
      <div className="px-4 py-3.5 flex gap-3 items-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <button
          onClick={() => { onClose(); setQuery(""); }}
          className="bg-none border-none text-[var(--text-secondary)] cursor-pointer text-lg"
        >
          ✕
        </button>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search flights, airports, airlines…"
          autoFocus
          className="flex-1 rounded-xl px-4 py-3 outline-none text-white text-[15px]"
          style={{
            background: "rgba(24,36,64,1)",
            border: "1px solid var(--bd)",
            fontFamily: "Inter",
          }}
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        {matchedAirports.length > 0 && (
          <>
            <div className="px-4 py-2.5 text-[11px] text-[var(--text-muted)] font-semibold">
              AIRPORTS
            </div>
            {matchedAirports.map((a) => (
              <div
                key={a.code}
                className="px-3 py-3 flex items-center gap-3 cursor-pointer hover:bg-[rgba(255,255,255,0.04)] transition-colors"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                onClick={() => { onSelectAirport(a); onClose(); setQuery(""); }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--blue-light)]" />
                <span className="mono text-[14px] text-[var(--blue-light)]">{a.code}</span>
                <span className="text-[12px] text-[var(--text-secondary)] ml-2">{a.name}</span>
              </div>
            ))}
          </>
        )}

        {matchedFlights.length > 0 && (
          <>
            <div className="px-4 py-2.5 text-[11px] text-[var(--text-muted)] font-semibold">
              FLIGHTS
            </div>
            {matchedFlights.map((f) => (
              <div
                key={f.id}
                className="px-3 py-3 flex items-center gap-3 cursor-pointer hover:bg-[rgba(255,255,255,0.04)] transition-colors"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                onClick={() => { onSelectFlight(f); onClose(); setQuery(""); }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: f.airline.color }} />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="mono text-[13px]">{f.id}</span>
                    <span className="mono text-[10px] text-[var(--text-muted)]">
                      FL{Math.floor(f.altitude / 100)}
                    </span>
                  </div>
                  <div className="text-[11px] text-[var(--text-secondary)]">
                    {f.origin.code} → {f.destination.code} · {f.airline.name}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {q && matchedAirports.length === 0 && matchedFlights.length === 0 && (
          <div className="py-10 text-center text-[var(--text-muted)]">No results</div>
        )}
      </div>
    </div>
  );
}
