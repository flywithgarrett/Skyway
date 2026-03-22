"use client";

import { Flight, isEmergency } from "@/data/flights";

interface GlobePopupProps {
  flight: Flight | null;
  onClose: () => void;
  onViewDetails: (flight: Flight) => void;
}

export default function GlobePopup({ flight, onClose, onViewDetails }: GlobePopupProps) {
  if (!flight) return null;
  const f = flight;
  const em = isEmergency(f);

  return (
    <div
      className="fixed z-[1500]"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "rgba(12,20,38,0.96)",
        backdropFilter: "blur(32px)",
        WebkitBackdropFilter: "blur(32px)",
        border: "1px solid rgba(59,184,232,0.15)",
        borderRadius: "24px",
        padding: "28px",
        minWidth: "340px",
        maxWidth: "400px",
        boxShadow: "0 24px 80px rgba(0,0,0,0.7), 0 0 40px rgba(59,184,232,0.08)",
        animation: "popIn .3s cubic-bezier(.16,1,.3,1)",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full flex items-center justify-center border-none text-[#7ea8cc] cursor-pointer text-[16px] transition-colors"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        ✕
      </button>

      <div className="flex items-center gap-2.5 mb-1">
        <div className="w-3 h-3 rounded-full" style={{ background: f.airline.color, boxShadow: `0 0 8px ${f.airline.color}` }} />
        <span className="text-[24px] font-extrabold text-white tracking-tight">{f.id}</span>
      </div>
      <div className="text-[13px] text-[#7ea8cc] mb-4">
        {f.airline.name} · {f.aircraft.name} · {f.registration}
      </div>

      {em && (
        <div className="py-2.5 px-3.5 rounded-[14px] mb-4 text-[#ff4058] text-[13px] font-bold flex items-center gap-2"
          style={{ background: "rgba(255,64,88,0.08)", border: "1px solid rgba(255,64,88,0.15)" }}>
          <span className="text-[18px]">⚠</span>EMERGENCY SQUAWK {f.squawk}
        </div>
      )}

      <div className="flex justify-between items-center py-4.5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="text-center">
          <div className="mono text-[26px] font-extrabold text-white">{f.origin.code}</div>
          <div className="text-[11px] text-[#5a7a98] mt-0.5">{f.origin.city}</div>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <div className="text-[#3bb8e8] text-[16px]">✈</div>
          <div className="w-[70px] h-[3px] rounded-sm overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="h-full rounded-sm" style={{ width: `${f.progress}%`, background: "linear-gradient(90deg, #3bb8e8, #5cc8f0)" }} />
          </div>
          <div className="mono text-[10px] text-[#5a7a98]">{f.progress}%</div>
        </div>
        <div className="text-center">
          <div className="mono text-[26px] font-extrabold text-white">{f.destination.code}</div>
          <div className="text-[11px] text-[#5a7a98] mt-0.5">{f.destination.city}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 mt-4">
        <StatBox label="Altitude" value={`FL${Math.floor(f.altitude / 100)}`} color="#5cc8f0" />
        <StatBox label="Speed" value={`${f.speed}`} unit="kts" />
        <StatBox label="Status" value={f.status} color={f.status === "En Route" ? "#5cc8f0" : "#7ea8cc"} small />
        <StatBox label="Heading" value={`${f.heading}°`} />
      </div>

      <button
        onClick={() => { onViewDetails(f); onClose(); }}
        className="w-full mt-4 py-3.5 rounded-[14px] text-[#3bb8e8] text-[14px] font-bold cursor-pointer transition-all tracking-tight"
        style={{
          background: "linear-gradient(135deg, rgba(59,184,232,0.12), rgba(92,200,240,0.08))",
          border: "1px solid rgba(59,184,232,0.2)",
          fontFamily: "Inter",
        }}
      >
        View Full Details →
      </button>
    </div>
  );
}

function StatBox({ label, value, unit, color, small }: {
  label: string; value: string; unit?: string; color?: string; small?: boolean;
}) {
  return (
    <div className="p-3.5 rounded-[14px]" style={{ background: "rgba(0,0,0,0.3)" }}>
      <div className="text-[9px] text-[#4a5e78] uppercase tracking-wide">{label}</div>
      <div
        className={`mono font-bold mt-1.5 ${small ? "text-[14px]" : "text-[18px]"}`}
        style={{ color: color || "#fff", fontFamily: small ? "Inter" : "'JetBrains Mono', monospace" }}
      >
        {value}
        {unit && <span className="text-[11px] text-[#5a7a98]"> {unit}</span>}
      </div>
    </div>
  );
}
