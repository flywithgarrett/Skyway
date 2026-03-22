"use client";

import { useEffect, useRef, useCallback } from "react";
import { Flight, isEmergency } from "@/data/flights";
import { AIRPORTS, MAJOR_AIRPORTS } from "@/data/airports";

interface Globe3DProps {
  flights: Flight[];
  selectedFlight: Flight | null;
  onFlightClick: (flight: Flight) => void;
  visible: boolean;
}

export default function Globe3D({ flights, selectedFlight, onFlightClick, visible }: Globe3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeRef = useRef<any>(null);
  const initRef = useRef(false);

  const initGlobe = useCallback(async () => {
    if (initRef.current || !containerRef.current) return;
    initRef.current = true;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-require-imports
    const Globe = (await import("globe.gl")).default as any;
    const THREE = await import("three");

    const mkTex = (color: string, accent: string) => {
      const sz = 128;
      const c = document.createElement("canvas");
      c.width = sz;
      c.height = sz;
      const x = c.getContext("2d")!;
      x.clearRect(0, 0, sz, sz);
      x.translate(sz / 2, sz / 2);
      const s = sz / 64;
      x.beginPath();
      x.moveTo(0, -24 * s); x.lineTo(3 * s, -15 * s); x.lineTo(4 * s, -8 * s);
      x.lineTo(22 * s, 2 * s); x.lineTo(22 * s, 5 * s); x.lineTo(4 * s, 0);
      x.lineTo(3 * s, 13 * s); x.lineTo(10 * s, 18 * s); x.lineTo(10 * s, 21 * s);
      x.lineTo(0, 17 * s); x.lineTo(-10 * s, 21 * s); x.lineTo(-10 * s, 18 * s);
      x.lineTo(-3 * s, 13 * s); x.lineTo(-4 * s, 0); x.lineTo(-22 * s, 5 * s);
      x.lineTo(-22 * s, 2 * s); x.lineTo(-4 * s, -8 * s); x.lineTo(-3 * s, -15 * s);
      x.closePath();
      x.fillStyle = color;
      x.fill();
      if (accent) { x.strokeStyle = accent; x.lineWidth = 0.5 * s; x.stroke(); }
      const tex = new THREE.CanvasTexture(c);
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      return tex;
    };

    const texNorm = mkTex("#e0eeff", "rgba(255,255,255,0.4)");
    const texSel = mkTex("#5cc8f0", "rgba(59,184,232,0.8)");
    const texEm = mkTex("#ff4058", "rgba(255,64,88,0.8)");

    const globe = Globe()
      .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-night.jpg")
      .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png")
      .backgroundImageUrl("https://unpkg.com/three-globe/example/img/night-sky.png")
      .atmosphereColor("#3bb8e8")
      .atmosphereAltitude(0.18)
      .width(window.innerWidth)
      .height(window.innerHeight)
      .pointOfView({ lat: 20, lng: 80, altitude: 3.5 })
      .pointsData(AIRPORTS)
      .pointLat("lat")
      .pointLng("lng")
      .pointAltitude(0)
      .pointColor(() => "#5cc8f0")
      .pointRadius(0.25)
      .pointResolution(12)
      .labelsData(AIRPORTS.filter((a) => MAJOR_AIRPORTS.includes(a.code)))
      .labelLat("lat")
      .labelLng("lng")
      .labelText("code")
      .labelSize(0.6)
      .labelDotRadius(0)
      .labelColor(() => "rgba(92,200,240,0.9)")
      .labelResolution(2)
      .labelAltitude(0.005)
      .customLayerData(flights)
      .customThreeObject((d: Flight) => {
        const em = isEmergency(d);
        const sel = selectedFlight?.id === d.id;
        const tex = em ? texEm : sel ? texSel : texNorm;
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, sizeAttenuation: true });
        const sprite = new THREE.Sprite(mat);
        sprite.renderOrder = em ? 10 : sel ? 5 : 1;
        sprite.material.rotation = -(d.heading * Math.PI / 180);
        return sprite;
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .customThreeObjectUpdate((obj: any, d: Flight) => {
        Object.assign(obj.position, globe.getCoords(d.lat, d.lng, d.altitude * 0.3048 / 6371000));
        const em = isEmergency(d);
        const sel = selectedFlight?.id === d.id;
        const alt = globe.pointOfView().altitude;
        const base = sel ? 0.6 : em ? 0.5 : 0.35;
        const s = base * Math.sqrt(Math.max(0.15, Math.min(2.0, alt)));
        obj.scale.set(s, s, 1);
        obj.material.map = em ? texEm : sel ? texSel : texNorm;
        obj.material.rotation = -(d.heading * Math.PI / 180);
        obj.material.needsUpdate = true;
      })
      .onCustomLayerClick((d: Flight) => {
        if (!d?.id) return;
        onFlightClick(d);
        globe.pointOfView({ lat: d.lat, lng: d.lng, altitude: 0.8 }, 800);
      })
      .arcsData([])
      .arcColor(() => ["#3bb8e8", "#5cc8f0"])
      .arcDashLength(0.4)
      .arcDashGap(0.2)
      .arcDashAnimateTime(1500)
      .arcStroke(0.8)
      (containerRef.current!);

    const ctrl = globe.controls();
    ctrl.enableDamping = true;
    ctrl.dampingFactor = 0.06;
    ctrl.rotateSpeed = 0.4;
    ctrl.zoomSpeed = 0.6;
    ctrl.minDistance = 120;
    ctrl.maxDistance = 800;
    ctrl.enablePan = false;
    ctrl.autoRotate = false;
    globe.pointOfView({ lat: 39, lng: -98, altitude: 1.6 }, 2800);

    globeRef.current = globe;

    const handleResize = () => {
      if (globeRef.current) {
        globeRef.current.width(window.innerWidth).height(window.innerHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (visible) initGlobe();
  }, [visible, initGlobe]);

  useEffect(() => {
    if (!globeRef.current || !visible) return;
    globeRef.current.customLayerData(flights);
    if (selectedFlight) {
      globeRef.current.arcsData([{
        startLat: selectedFlight.origin.lat,
        startLng: selectedFlight.origin.lng,
        endLat: selectedFlight.destination.lat,
        endLng: selectedFlight.destination.lng,
      }]);
    } else {
      globeRef.current.arcsData([]);
    }
  }, [flights, selectedFlight, visible]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0"
      style={{ display: visible ? "block" : "none" }}
    />
  );
}
