"use client";

import { useEffect, useState } from "react";

interface TopBarProps {
  onSearchOpen: () => void;
  onToggleLayers: () => void;
}

export default function TopBar({ onSearchOpen, onToggleLayers }: TopBarProps) {
  const [clock, setClock] = useState("");

  useEffect(() => {
    const update = () => {
      const n = new Date();
      setClock(
        `${n.getUTCHours().toString().padStart(2, "0")}:${n.getUTCMinutes().toString().padStart(2, "0")}Z`
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] flex items-center gap-2.5 px-3.5 py-2.5 pointer-events-none"
      style={{ background: "linear-gradient(180deg, rgba(10,22,40,0.95) 0%, transparent 100%)" }}>
      <div className="flex items-center gap-2 pointer-events-auto">
        <div className="w-[9px] h-[9px] rounded-full bg-[#3bb8e8]" style={{ boxShadow: "0 0 10px rgba(59,184,232,0.5)" }} />
        <span className="text-[17px] font-bold text-white tracking-wide">SkyWay</span>
      </div>

      <div
        onClick={onSearchOpen}
        className="glass flex-1 max-w-[300px] flex items-center gap-2 px-4 py-2.5 cursor-pointer pointer-events-auto"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="text-[13px] text-[var(--text-muted)]">Search flights, airports…</span>
      </div>

      <div className="glass mono flex items-center gap-1.5 px-3.5 py-[7px] pointer-events-auto">
        <div className="w-1.5 h-1.5 rounded-full bg-[#3bb8e8]" style={{ boxShadow: "0 0 6px rgba(59,184,232,0.5)" }} />
        <span className="text-[11px] text-[#3bb8e8] font-medium">LIVE</span>
        <span className="text-[11px] text-[var(--text-secondary)]">{clock}</span>
      </div>

      <button
        onClick={onToggleLayers}
        className="glass flex items-center gap-[5px] px-3 py-[7px] cursor-pointer pointer-events-auto text-[var(--accent)] text-[11px] font-medium"
        style={{ border: "1px solid rgba(59,184,232,0.15)" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        Layers
      </button>
    </div>
  );
}
