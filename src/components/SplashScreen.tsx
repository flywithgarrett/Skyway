"use client";

import { useEffect, useState } from "react";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setProgress(30), 100),
      setTimeout(() => setProgress(60), 400),
      setTimeout(() => setProgress(90), 700),
      setTimeout(() => setProgress(100), 1400),
      setTimeout(() => onComplete(), 1800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-600"
      style={{ background: "#0a1628" }}
    >
      <div className="relative mb-8">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          style={{ animation: "splashPulse 2s ease-in-out infinite" }}
        >
          <circle cx="40" cy="40" r="38" stroke="rgba(59,184,232,0.15)" strokeWidth="1" />
          <circle cx="40" cy="40" r="28" stroke="rgba(59,184,232,0.1)" strokeWidth="0.5" />
          <path
            d="M40 14 L43 26 L44 32 L60 40 L60 43 L44 39 L43 52 L49 56 L49 58 L40 55 L31 58 L31 56 L37 52 L36 39 L20 43 L20 40 L36 32 L37 26 Z"
            fill="url(#splashGrad)"
            stroke="rgba(59,184,232,0.3)"
            strokeWidth="0.5"
          />
          <defs>
            <linearGradient id="splashGrad" x1="40" y1="14" x2="40" y2="58">
              <stop offset="0%" stopColor="#5cc8f0" />
              <stop offset="100%" stopColor="#3bb8e8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="text-[32px] font-extrabold text-white tracking-tight mb-2">
        SkyWay
      </div>
      <div className="text-[13px] text-[rgba(126,168,204,0.6)] font-normal tracking-[2px] uppercase mb-12">
        Live Flight Intelligence
      </div>
      <div className="w-[120px] h-[2px] bg-[rgba(255,255,255,0.06)] rounded-sm overflow-hidden">
        <div
          className="h-full rounded-sm transition-all duration-300"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #3bb8e8, #5cc8f0)",
          }}
        />
      </div>
    </div>
  );
}
