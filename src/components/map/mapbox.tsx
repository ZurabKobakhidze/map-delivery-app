"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapStyle from "./mapStyle";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

export default function MapboxMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/zukakobakhidze/cmnezirca004201s71zh5628f",
      center: [44.8271, 41.6938],
      zoom: 13,
      config: {
        basemap: mapStyle,
      },
    });

    return () => map.remove();
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
