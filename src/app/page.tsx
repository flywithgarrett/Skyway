"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Flight, generateFlights, updateFlightPositions, isEmergency } from "@/data/flights";
import { Airport } from "@/data/airports";
import { AIRLINES } from "@/data/airlines";
import SplashScreen from "@/components/SplashScreen";
import TopBar from "@/components/TopBar";
import BottomNav, { NavTab } from "@/components/BottomNav";
import SearchOverlay from "@/components/SearchOverlay";
import LayersPanel, { BaseMap, Filters } from "@/components/LayersPanel";
import Panel from "@/components/Panel";
import Globe3D from "@/components/Globe3D";
import GlobePopup from "@/components/GlobePopup";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [activeTab, setActiveTab] = useState<NavTab>("map");
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [selectedAirport, setSelectedAirport] = useState<Airport | null>(null);
  const [popupFlight, setPopupFlight] = useState<Flight | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [layersOpen, setLayersOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [baseMap, setBaseMap] = useState<BaseMap>("3d");
  const [filters, setFilters] = useState<Filters>({
    altMin: 0, altMax: 65000, spdMin: 0, spdMax: 800, airline: "all", acType: "all",
  });

  const flightsRef = useRef<Flight[]>([]);

  // Generate flights on mount
  useEffect(() => {
    const f = generateFlights(1000);
    flightsRef.current = f;
    setFlights([...f]);
  }, []);

  // Update flight positions periodically
  useEffect(() => {
    const id = setInterval(() => {
      updateFlightPositions(flightsRef.current);
      setFlights([...flightsRef.current]);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // Filtered flights
  const filteredFlights = useMemo(() => {
    return flights.filter(
      (f) =>
        f.altitude >= filters.altMin &&
        f.altitude <= filters.altMax &&
        f.speed >= filters.spdMin &&
        f.speed <= filters.spdMax &&
        (filters.airline === "all" || f.airline.iata === filters.airline) &&
        (filters.acType === "all" || f.aircraft.code === filters.acType)
    );
  }, [flights, filters]);

  // Aircraft type options for filter dropdown
  const acTypeOptions = useMemo(() => {
    const seen = new Map<string, string>();
    flights.forEach((f) => {
      if (!seen.has(f.aircraft.code)) seen.set(f.aircraft.code, f.aircraft.name);
    });
    return Array.from(seen.entries()).map(([code, name]) => ({ code, name }));
  }, [flights]);

  const handleTabChange = useCallback((tab: NavTab) => {
    setActiveTab(tab);
    setSelectedFlight(null);
    setSelectedAirport(null);
    if (tab === "map") {
      setPanelOpen(false);
    } else {
      setPanelOpen(true);
    }
  }, []);

  const handleSelectFlight = useCallback((f: Flight) => {
    setSelectedFlight(f);
    setSelectedAirport(null);
    setPanelOpen(true);
    setPopupFlight(null);
  }, []);

  const handleSelectAirport = useCallback((a: Airport) => {
    setSelectedAirport(a);
    setSelectedFlight(null);
    setPanelOpen(true);
  }, []);

  const handleGlobeFlightClick = useCallback((f: Flight) => {
    setPopupFlight(f);
  }, []);

  const handleClosePanel = useCallback(() => {
    setPanelOpen(false);
    setSelectedFlight(null);
    setSelectedAirport(null);
    setActiveTab("map");
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <Globe3D
        flights={filteredFlights}
        selectedFlight={selectedFlight}
        onFlightClick={handleGlobeFlightClick}
        visible={baseMap === "3d"}
      />

      <GlobePopup
        flight={popupFlight}
        onClose={() => setPopupFlight(null)}
        onViewDetails={handleSelectFlight}
      />

      <TopBar
        onSearchOpen={() => setSearchOpen(true)}
        onToggleLayers={() => setLayersOpen(!layersOpen)}
      />

      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        flights={filteredFlights}
        onSelectFlight={handleSelectFlight}
        onSelectAirport={handleSelectAirport}
      />

      <LayersPanel
        open={layersOpen}
        onClose={() => setLayersOpen(false)}
        baseMap={baseMap}
        onBaseMapChange={setBaseMap}
        filters={filters}
        onFiltersChange={setFilters}
        airlineOptions={AIRLINES.map((a) => ({ iata: a.iata, name: a.name }))}
        acTypeOptions={acTypeOptions}
        shownCount={filteredFlights.length}
        totalCount={flights.length}
      />

      <Panel
        tab={activeTab}
        flights={filteredFlights}
        onSelectFlight={handleSelectFlight}
        onSelectAirport={handleSelectAirport}
        selectedFlight={selectedFlight}
        selectedAirport={selectedAirport}
        onClose={handleClosePanel}
        visible={panelOpen}
      />

      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
    </>
  );
}
