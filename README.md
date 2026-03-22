# SkyWay — Live Flight Intelligence

A real-time flight tracking application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **3D Globe** — Interactive 3D Earth visualization with globe.gl and Three.js
- **1000+ Simulated Flights** — Realistic airline routes with proper hubs and fleets
- **Flight Tracking** — Click any flight for detailed information
- **ATC Simulation** — Live simulated ATC transcript feed
- **Airport Details** — Arrivals, departures, and LiveATC audio integration
- **Search** — Search flights by callsign, airport, or airline
- **Filters** — Filter by altitude, speed, airline, and aircraft type
- **Emergency Alerts** — Real-time squawk 7700/7600/7500 monitoring

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript**
- **Tailwind CSS v4**
- **globe.gl** + **Three.js** for 3D visualization
- **Leaflet** for 2D map views

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static export is configured — output goes to the `out/` directory.
