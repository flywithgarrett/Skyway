# SkyWay

Premium global aviation intelligence platform. Live flight tracking, 3D globe, ATC audio & transcripts.

## Features

- **3D Globe** — Interactive Earth with real-time flight positions using Globe.gl + Three.js
- **Live Flight Tracking** — 1,000 simulated flights across 18 airlines with realistic routes
- **ATC Audio** — Live air traffic control audio via LiveATC integration
- **ATC Transcripts** — Real-time simulated ATC communications
- **Weather Radar** — Live precipitation overlay via RainViewer API
- **Map Layers** — Dark, satellite, terrain, and 3D globe views
- **Flight Filters** — Filter by altitude, speed, airline, and aircraft type
- **Search** — Search flights, airports, and airlines
- **Emergency Alerts** — Squawk 7500/7600/7700 monitoring

## Getting Started

```bash
# Serve locally
npx serve .

# Or with CORS enabled
npx serve . --cors
```

Then open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── index.html          # Main HTML with UI layout
├── css/
│   └── main.css        # All styles
├── js/
│   └── app.js          # Application logic (data, map, globe, UI)
├── package.json        # Project metadata & scripts
└── .github/
    └── workflows/
        └── claude.yml  # Claude Code GitHub Action
```

## Tech Stack

- **Leaflet** — 2D map rendering
- **Globe.gl + Three.js** — 3D globe visualization
- **RainViewer API** — Weather radar data
- **LiveATC** — ATC audio streams
- No build step required — pure HTML/CSS/JS
