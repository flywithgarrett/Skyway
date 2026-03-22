"use client";

export type NavTab = "map" | "flights" | "airports" | "atc" | "alerts";

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

const tabs: { id: NavTab; label: string; icon: string }[] = [
  {
    id: "map",
    label: "Map",
    icon: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  },
  {
    id: "flights",
    label: "Flights",
    icon: '<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>',
  },
  {
    id: "airports",
    label: "Airports",
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/>',
  },
  {
    id: "atc",
    label: "ATC",
    icon: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/>',
  },
  {
    id: "alerts",
    label: "Alerts",
    icon: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  },
];

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[1000] flex"
      style={{
        padding: "6px 12px calc(env(safe-area-inset-bottom, 8px) + 6px)",
        background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
        backdropFilter: "blur(40px) saturate(1.8)",
        WebkitBackdropFilter: "blur(40px) saturate(1.8)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 -8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className="flex-1 flex flex-col items-center gap-[3px] bg-none border-none cursor-pointer py-2 transition-all duration-250"
          style={{
            color: activeTab === tab.id ? "#fff" : "rgba(255,255,255,0.4)",
            fontFamily: "Inter",
            fontSize: "10px",
            fontWeight: 500,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="w-[22px] h-[22px] transition-all duration-250"
            style={
              activeTab === tab.id
                ? { filter: "drop-shadow(0 0 6px rgba(59,184,232,0.5))" }
                : undefined
            }
            dangerouslySetInnerHTML={{ __html: tab.icon }}
          />
          {tab.label}
        </button>
      ))}
    </div>
  );
}
