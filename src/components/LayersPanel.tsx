"use client";

export type BaseMap = "dark" | "satellite" | "terrain" | "3d";

export interface Filters {
  altMin: number;
  altMax: number;
  spdMin: number;
  spdMax: number;
  airline: string;
  acType: string;
}

interface LayersPanelProps {
  open: boolean;
  onClose: () => void;
  baseMap: BaseMap;
  onBaseMapChange: (base: BaseMap) => void;
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  airlineOptions: { iata: string; name: string }[];
  acTypeOptions: { code: string; name: string }[];
  shownCount: number;
  totalCount: number;
}

export default function LayersPanel({
  open,
  onClose,
  baseMap,
  onBaseMapChange,
  filters,
  onFiltersChange,
  airlineOptions,
  acTypeOptions,
  shownCount,
  totalCount,
}: LayersPanelProps) {
  const update = (partial: Partial<Filters>) => {
    onFiltersChange({ ...filters, ...partial });
  };

  const resetFilters = () => {
    onFiltersChange({ altMin: 0, altMax: 65000, spdMin: 0, spdMax: 800, airline: "all", acType: "all" });
  };

  return (
    <div
      className="fixed top-[50px] w-[300px] max-h-[80vh] z-[800] overflow-y-auto transition-all duration-300"
      style={{
        right: open ? "14px" : "-320px",
        background: "rgba(10,22,40,0.95)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        border: "1px solid rgba(59,184,232,0.1)",
        borderRadius: "16px",
        boxShadow: "-4px 0 30px rgba(0,0,0,0.4)",
      }}
    >
      <div className="p-3.5 flex justify-between items-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="text-[15px] font-semibold text-white">Map Layers & Filters</span>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer text-sm text-[var(--text-secondary)]"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          ✕
        </button>
      </div>

      <SectionTitle>Base Map</SectionTitle>
      <LayerRow label="Dark" desc="Default dark theme" active={baseMap === "dark"} onClick={() => onBaseMapChange("dark")} />
      <LayerRow label="Satellite" desc="Satellite imagery" active={baseMap === "satellite"} onClick={() => onBaseMapChange("satellite")} />
      <LayerRow label="Terrain" desc="Topographic view" active={baseMap === "terrain"} onClick={() => onBaseMapChange("terrain")} />
      <LayerRow label="3D Globe" desc="Interactive 3D Earth" active={baseMap === "3d"} onClick={() => onBaseMapChange("3d")} accent />

      <SectionTitle>Flight Filters</SectionTitle>

      <RangeRow
        label="Altitude"
        valueLabel={`${filters.altMin.toLocaleString()} — ${filters.altMax.toLocaleString()} ft`}
        min={0} max={65000} step={1000}
        valueMin={filters.altMin} valueMax={filters.altMax}
        onMinChange={(v) => update({ altMin: v })}
        onMaxChange={(v) => update({ altMax: v })}
      />
      <RangeRow
        label="Speed"
        valueLabel={`${filters.spdMin} — ${filters.spdMax} kts`}
        min={0} max={800} step={10}
        valueMin={filters.spdMin} valueMax={filters.spdMax}
        onMinChange={(v) => update({ spdMin: v })}
        onMaxChange={(v) => update({ spdMax: v })}
      />

      <div className="px-3.5 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
        <div className="text-[11px] text-[var(--text-secondary)] mb-1.5">Airline</div>
        <select
          value={filters.airline}
          onChange={(e) => update({ airline: e.target.value })}
          className="w-full p-2 rounded-lg text-white text-[12px] outline-none"
          style={{ background: "rgba(0,0,0,0.3)", border: "1px solid var(--bd)", fontFamily: "Inter" }}
        >
          <option value="all">All Airlines</option>
          {airlineOptions.map((a) => (
            <option key={a.iata} value={a.iata}>{a.name}</option>
          ))}
        </select>
      </div>

      <div className="px-3.5 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
        <div className="text-[11px] text-[var(--text-secondary)] mb-1.5">Aircraft Type</div>
        <select
          value={filters.acType}
          onChange={(e) => update({ acType: e.target.value })}
          className="w-full p-2 rounded-lg text-white text-[12px] outline-none"
          style={{ background: "rgba(0,0,0,0.3)", border: "1px solid var(--bd)", fontFamily: "Inter" }}
        >
          <option value="all">All Aircraft</option>
          {acTypeOptions.map((a) => (
            <option key={a.code} value={a.code}>{a.code} — {a.name}</option>
          ))}
        </select>
      </div>

      <div className="p-3.5">
        <button
          onClick={resetFilters}
          className="w-full py-2.5 rounded-[10px] text-[var(--accent)] text-[12px] font-semibold cursor-pointer"
          style={{
            background: "rgba(59,184,232,0.08)",
            border: "1px solid rgba(59,184,232,0.12)",
            fontFamily: "Inter",
          }}
        >
          Reset All Filters
        </button>
      </div>
      <div className="px-3.5 pb-3.5 text-[10px] text-[var(--text-muted)] text-center">
        Showing {shownCount} of {totalCount} flights
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-semibold text-[var(--accent)] tracking-wide px-3.5 pt-3 pb-1.5 uppercase">
      {children}
    </div>
  );
}

function LayerRow({ label, desc, active, onClick, accent }: {
  label: string; desc: string; active: boolean; onClick: () => void; accent?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-2.5 px-3.5 py-2.5 cursor-pointer transition-colors hover:bg-[rgba(59,184,232,0.04)]"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}
      onClick={onClick}
    >
      <div
        className="w-[38px] h-[22px] rounded-[11px] relative cursor-pointer transition-colors flex-shrink-0"
        style={{ background: active ? "rgba(59,184,232,0.4)" : "rgba(255,255,255,0.08)" }}
      >
        <div
          className="absolute w-[18px] h-[18px] rounded-full bg-white top-[2px] transition-all"
          style={{ left: active ? "18px" : "2px" }}
        />
      </div>
      <div>
        <div className="text-[13px] text-white">{label}</div>
        <div className={`text-[10px] ${accent && active ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}`}>{desc}</div>
      </div>
    </div>
  );
}

function RangeRow({ label, valueLabel, min, max, step, valueMin, valueMax, onMinChange, onMaxChange }: {
  label: string; valueLabel: string; min: number; max: number; step: number;
  valueMin: number; valueMax: number; onMinChange: (v: number) => void; onMaxChange: (v: number) => void;
}) {
  return (
    <div className="px-3.5 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
      <div className="flex justify-between text-[11px]">
        <span className="text-[var(--text-secondary)]">{label}</span>
        <span className="mono text-[var(--accent)]">{valueLabel}</span>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="range" min={min} max={max} step={step} value={valueMin}
          onChange={(e) => onMinChange(Number(e.target.value))}
          className="w-full my-1.5"
          style={{ accentColor: "#3bb8e8", height: "4px" }}
        />
        <input
          type="range" min={min} max={max} step={step} value={valueMax}
          onChange={(e) => onMaxChange(Number(e.target.value))}
          className="w-full my-1.5"
          style={{ accentColor: "#3bb8e8", height: "4px" }}
        />
      </div>
    </div>
  );
}
