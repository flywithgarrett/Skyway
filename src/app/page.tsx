"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[#0a0f1a]">
      <div className="text-center">
        <div className="text-2xl font-bold text-cyan-400 mb-2">SkyWay</div>
        <div className="text-sm text-slate-500">Loading flight data...</div>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Map />
    </main>
  );
}
