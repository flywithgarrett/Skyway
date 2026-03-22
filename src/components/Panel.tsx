"use client";

import { useEffect, useRef, useState } from "react";
import { Flight, isEmergency } from "@/data/flights";
import { Airport, AIRPORTS, AIRPORT_MAP } from "@/data/airports";
import { AIRLINES } from "@/data/airlines";
import { ATCMessage, ATC_TYPE_COLORS, generateATCMessage } from "@/data/atc";
import { HUBS } from "@/data/airlines";
import { NavTab } from "./BottomNav";

interface PanelProps {
  tab: NavTab;
  flights: Flight[];
  onSelectFlight: (flight: Flight) => void;
  onSelectAirport: (airport: Airport) => void;
  selectedFlight: Flight | null;
  selectedAirport: Airport | null;
  onClose: () => void;
  visible: boolean;
}

export default function Panel({
  tab,
  flights,
  onSelectFlight,
  onSelectAirport,
  selectedFlight,
  selectedAirport,
  onClose,
  visible,
}: PanelProps) {
  const [atcMessages, setAtcMessages] = useState<ATCMessage[]>([]);
  const [currentATCAirport, setCurrentATCAirport] = useState<Airport>(AIRPORTS[0]);
  const atcRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setAtcMessages((prev) => {
        const next = [...prev, generateATCMessage()];
        return next.slice(-80);
      });
    }, 2500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (atcRef.current) {
      atcRef.current.scrollTop = atcRef.current.scrollHeight;
    }
  }, [atcMessages]);

  const renderTitle = () => {
    if (selectedFlight) {
      return (
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: selectedFlight.airline.color }} />
          <span>{selectedFlight.id}</span>
          <span className="font-normal text-[12px] text-[var(--text-secondary)]">{selectedFlight.airline.name}</span>
        </div>
      );
    }
    if (selectedAirport) {
      return (
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--blue-light)]" />
          <span className="text-[var(--blue-light)]">{selectedAirport.code}</span>
          <span className="font-normal text-[12px] text-[var(--text-secondary)]">{selectedAirport.name}</span>
        </div>
      );
    }

    switch (tab) {
      case "flights":
        return <span>Flights <span className="font-normal text-[var(--text-secondary)] text-[12px]">{flights.length} tracked</span></span>;
      case "airports":
        return "Airports";
      case "atc":
        return <span>ATC <span className="mono text-[var(--accent)] text-[12px]">{currentATCAirport.code}</span></span>;
      case "alerts": {
        const emCount = flights.filter(isEmergency).length;
        return <span><span className="text-[var(--emergency)]">⚠ Alerts</span> <span className="font-normal text-[12px] text-[var(--text-secondary)]">{emCount} active</span></span>;
      }
      default:
        return "";
    }
  };

  const renderContent = () => {
    if (selectedFlight) return <FlightDetailContent flight={selectedFlight} onSelectFlight={onSelectFlight} />;
    if (selectedAirport) return <AirportDetailContent airport={selectedAirport} flights={flights} onSelectFlight={onSelectFlight} />;

    switch (tab) {
      case "flights":
        return <FlightListContent flights={flights} onSelectFlight={onSelectFlight} />;
      case "airports":
        return <AirportListContent onSelectAirport={onSelectAirport} />;
      case "atc":
        return (
          <ATCContent
            airport={currentATCAirport}
            onAirportChange={setCurrentATCAirport}
            messages={atcMessages}
            atcRef={atcRef}
          />
        );
      case "alerts":
        return <AlertsContent flights={flights} onSelectFlight={onSelectFlight} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[900] flex flex-col max-h-[85vh] transition-transform duration-350"
      style={{
        background: "rgba(18,28,48,0.94)",
        backdropFilter: "blur(28px)",
        borderRadius: "20px 20px 0 0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        transform: visible ? "translateY(0)" : "translateY(100%)",
      }}
    >
      <div className="w-9 h-1 rounded-sm mx-auto mt-2.5 mb-1.5" style={{ background: "rgba(255,255,255,0.12)" }} />
      <div className="px-4 py-2 pb-3 flex justify-between items-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="text-[16px] font-semibold">{renderTitle()}</div>
        <button
          onClick={onClose}
          className="w-[30px] h-[30px] rounded-full flex items-center justify-center border-none cursor-pointer text-[15px] text-[var(--text-secondary)]"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          ✕
        </button>
      </div>
      <div className="flex-1 overflow-y-auto" style={{ overscrollBehavior: "contain" }}>
        {renderContent()}
      </div>
    </div>
  );
}

function FlightDetailContent({ flight: f, onSelectFlight }: { flight: Flight; onSelectFlight: (f: Flight) => void }) {
  const em = isEmergency(f);
  const D = (label: string, value: string, color?: string) => (
    <div className="flex justify-between py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <span className="text-[var(--text-secondary)] text-[12px]">{label}</span>
      <span className="mono text-[13px] font-medium" style={{ color: color || "#fff" }}>{value}</span>
    </div>
  );

  return (
    <div className="p-4">
      <div className="flex justify-center gap-6 p-5 rounded-2xl mb-4" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="text-center">
          <div className="mono text-[28px] font-bold">{f.origin.code}</div>
          <div className="text-[11px] text-[var(--text-secondary)]">{f.origin.city}</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="text-[var(--accent)] text-[14px]">✈</div>
          <div className="w-[60px] h-[3px] rounded-sm overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="h-full bg-[var(--accent)]" style={{ width: `${f.progress}%` }} />
          </div>
          <div className="mono text-[10px] text-[var(--text-muted)]">{f.progress}%</div>
        </div>
        <div className="text-center">
          <div className="mono text-[28px] font-bold">{f.destination.code}</div>
          <div className="text-[11px] text-[var(--text-secondary)]">{f.destination.city}</div>
        </div>
      </div>

      {em && (
        <div className="py-2.5 px-3.5 rounded-xl mb-3.5 text-[var(--emergency)] text-[13px] font-semibold"
          style={{ background: "rgba(255,64,88,0.08)", border: "1px solid rgba(255,64,88,0.12)" }}>
          ⚠️ EMERGENCY — SQUAWK {f.squawk}
        </div>
      )}

      <div className="inline-flex items-center gap-1 px-2.5 py-[3px] rounded-lg text-[10px] font-semibold mb-3.5"
        style={{ background: "rgba(59,184,232,0.1)", color: "var(--accent)" }}>
        {f.status}
      </div>

      {D("Aircraft", `${f.aircraft.code} — ${f.aircraft.name}`)}
      {D("Registration", f.registration)}
      {D("Altitude", `FL${Math.floor(f.altitude / 100)} (${f.altitude.toLocaleString()} ft)`, f.altitude > 30000 ? "var(--accent)" : "#fff")}
      {D("Speed", `${f.speed} kts (${Math.floor(f.speed * 1.852)} km/h)`)}
      {D("Heading", `${f.heading}°`)}
      {D("V/S", `${f.verticalRate > 0 ? "+" : ""}${f.verticalRate} fpm`, f.verticalRate > 500 ? "var(--accent)" : f.verticalRate < -500 ? "var(--emergency)" : "var(--text)")}
      {D("Squawk", f.squawk, em ? "var(--emergency)" : undefined)}
      {D("Position", `${f.lat.toFixed(3)}°, ${f.lng.toFixed(3)}°`)}
    </div>
  );
}

function AirportDetailContent({ airport: a, flights, onSelectFlight }: {
  airport: Airport; flights: Flight[]; onSelectFlight: (f: Flight) => void;
}) {
  const arrivals = flights.filter((f) => f.destination.code === a.code).slice(0, 20);
  const departures = flights.filter((f) => f.origin.code === a.code).slice(0, 20);

  return (
    <div className="p-4">
      <div className="flex gap-2.5 mb-4">
        <div className="flex-1 p-4 rounded-[14px] text-center" style={{ background: "rgba(0,0,0,0.2)" }}>
          <div className="text-[32px] font-bold text-[var(--green)]">{arrivals.length}</div>
          <div className="text-[11px] text-[var(--text-secondary)] mt-1">Arrivals</div>
        </div>
        <div className="flex-1 p-4 rounded-[14px] text-center" style={{ background: "rgba(0,0,0,0.2)" }}>
          <div className="text-[32px] font-bold text-[var(--accent)]">{departures.length}</div>
          <div className="text-[11px] text-[var(--text-secondary)] mt-1">Departures</div>
        </div>
      </div>

      <a
        href={`https://www.liveatc.net/listen.php?mount=${a.feed}&icao=${a.code.toLowerCase()}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center py-3 rounded-xl text-[13px] font-semibold no-underline mb-4.5"
        style={{
          background: "rgba(45,212,160,0.1)",
          color: "var(--green)",
          border: "1px solid rgba(45,212,160,0.12)",
        }}
      >
        ▶ Listen ATC Live — {a.code}
      </a>

      <div className="text-[13px] font-semibold text-[var(--green)] mb-2">Arriving</div>
      {arrivals.map((f) => (
        <FlightRow key={f.id} flight={f} subtitle={`from ${f.origin.code} · ${f.airline.name} · ${f.aircraft.code}`} onClick={() => onSelectFlight(f)} />
      ))}

      <div className="text-[13px] font-semibold text-[var(--accent)] mt-4 mb-2">Departing</div>
      {departures.map((f) => (
        <FlightRow key={f.id} flight={f} subtitle={`to ${f.destination.code} · ${f.airline.name} · ${f.aircraft.code}`} onClick={() => onSelectFlight(f)} />
      ))}
    </div>
  );
}

function FlightListContent({ flights, onSelectFlight }: { flights: Flight[]; onSelectFlight: (f: Flight) => void }) {
  return (
    <>
      {flights.slice(0, 60).map((f) => (
        <FlightRow
          key={f.id}
          flight={f}
          subtitle={`${f.origin.code} → ${f.destination.code} · ${f.airline.name} · ${f.aircraft.code} · ${f.speed}kts`}
          onClick={() => onSelectFlight(f)}
        />
      ))}
    </>
  );
}

function AirportListContent({ onSelectAirport }: { onSelectAirport: (a: Airport) => void }) {
  const hubCodes = new Set(Object.values(HUBS).map((h) => h.hub));
  const majorUS = ["KJFK", "KLAX", "KORD", "KATL", "KCLT", "KDFW", "KDEN", "KSFO", "KMIA", "KBOS", "KSEA"];
  const filtered = AIRPORTS.filter((a) => hubCodes.has(a.code) || a.country !== "US" || majorUS.includes(a.code));

  return (
    <>
      {filtered.map((a) => (
        <div
          key={a.code}
          className="px-3 py-3 flex items-center gap-3 cursor-pointer hover:bg-[rgba(255,255,255,0.04)] transition-colors"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
          onClick={() => onSelectAirport(a)}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--blue-light)]" />
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="mono text-[14px] font-medium">{a.code}</span>
              <span className="text-[11px] text-[var(--text-muted)]">{a.country}</span>
            </div>
            <div className="text-[12px] text-[var(--text-secondary)]">{a.name} — {a.city}</div>
          </div>
        </div>
      ))}
    </>
  );
}

function ATCContent({ airport, onAirportChange, messages, atcRef }: {
  airport: Airport;
  onAirportChange: (a: Airport) => void;
  messages: ATCMessage[];
  atcRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <>
      <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <select
          value={airport.code}
          onChange={(e) => {
            const a = AIRPORTS.find((ap) => ap.code === e.target.value);
            if (a) onAirportChange(a);
          }}
          className="w-full p-2.5 rounded-[10px] text-white text-[13px] outline-none"
          style={{ background: "var(--bg)", border: "1px solid var(--bd)", fontFamily: "Inter" }}
        >
          {AIRPORTS.filter((a) => a.feed).slice(0, 30).map((a) => (
            <option key={a.code} value={a.code}>{a.code} — {a.name}</option>
          ))}
        </select>
      </div>

      <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="text-[12px] font-semibold text-[var(--accent)] mb-2.5">🎧 Live ATC Audio — {airport.code}</div>
        <div className="rounded-xl overflow-hidden" style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(59,184,232,0.1)" }}>
          <iframe
            src={`https://www.liveatc.net/hlisten.php?mount=${airport.feed}&icao=${airport.code.toLowerCase()}`}
            className="w-full h-[180px] border-none"
            style={{ background: "#0a1628" }}
            allow="autoplay"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>
        <div className="text-[9px] text-[var(--text-muted)] mt-1.5 text-center">
          Audio provided by LiveATC.net · May require interaction to start
        </div>
      </div>

      <div className="px-4 pt-1 pb-1">
        <div className="text-[11px] font-semibold text-[var(--text-secondary)] mb-1">ATC Transcript</div>
      </div>
      <div ref={atcRef} className="px-3 pb-3 max-h-[300px] overflow-y-auto">
        {messages.slice(-25).map((m, i) => (
          <div
            key={i}
            className="p-2 px-3 mb-1 rounded-[10px]"
            style={{ background: "rgba(0,0,0,0.15)", borderLeft: `3px solid ${ATC_TYPE_COLORS[m.type] || "#4a5e78"}` }}
          >
            <div className="flex justify-between mb-0.5">
              <div className="flex gap-1.5 items-center">
                <span
                  className="inline-flex items-center px-2 py-0.5 rounded-lg text-[9px] font-semibold"
                  style={{ background: `${ATC_TYPE_COLORS[m.type] || "#4a5e78"}15`, color: ATC_TYPE_COLORS[m.type] || "#4a5e78" }}
                >
                  {m.type}
                </span>
                <span className="mono text-[var(--accent)] font-medium text-[11px]">{m.callsign}</span>
              </div>
              <span className="mono text-[var(--text-muted)] text-[9px]">{m.time}Z</span>
            </div>
            <div className="mono text-[var(--text-secondary)] text-[10px] leading-relaxed">{m.message}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function AlertsContent({ flights, onSelectFlight }: { flights: Flight[]; onSelectFlight: (f: Flight) => void }) {
  const emergencies = flights.filter(isEmergency);

  if (emergencies.length === 0) {
    return (
      <div className="py-[60px] px-5 text-center">
        <div className="text-[44px] mb-3">✈️</div>
        <div className="text-[var(--text)] text-[15px] font-semibold">All Clear</div>
        <div className="text-[var(--text-muted)] text-[12px] mt-1">No active emergency aircraft</div>
      </div>
    );
  }

  return (
    <>
      {emergencies.map((f) => (
        <div
          key={f.id}
          className="px-3 py-3 flex items-center gap-3 cursor-pointer hover:bg-[rgba(255,255,255,0.04)]"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", borderLeft: "3px solid var(--emergency)" }}
          onClick={() => onSelectFlight(f)}
        >
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <span className="mono text-[15px] font-semibold text-[var(--emergency)]">{f.id}</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-[3px] rounded-lg text-[10px] font-semibold"
                style={{ background: "rgba(255,64,88,0.1)", color: "var(--emergency)" }}>
                SQUAWK {f.squawk}
              </span>
            </div>
            <div className="text-[12px] text-[var(--text-secondary)] mt-1">{f.airline.name} · {f.aircraft.name}</div>
            <div className="text-[11px] text-[var(--text-muted)] mt-0.5">
              {f.origin.code} → {f.destination.code} · FL{Math.floor(f.altitude / 100)} · {f.speed}kts
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function FlightRow({ flight: f, subtitle, onClick }: { flight: Flight; subtitle: string; onClick: () => void }) {
  return (
    <div
      className="px-3 py-3 flex items-center gap-3 cursor-pointer hover:bg-[rgba(255,255,255,0.04)] transition-colors"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
      onClick={onClick}
    >
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: f.airline.color }} />
      <div className="flex-1">
        <div className="flex justify-between">
          <span className="mono text-[13px] font-medium">{f.id}</span>
          <span className="mono text-[10px] text-[var(--text-muted)]">FL{Math.floor(f.altitude / 100)}</span>
        </div>
        <div className="text-[11px] text-[var(--text-secondary)]">{subtitle}</div>
      </div>
    </div>
  );
}
