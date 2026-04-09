"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  land,
  water,
  buildings,
  roads,
  admin,
  textColors,
  textSizes,
} from "./mapStyle";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

const allLayers = { ...land, ...water, ...buildings, ...roads, ...admin };

async function fetchStyledStyle(): Promise<mapboxgl.StyleSpecification> {
  const res = await fetch(
    `https://api.mapbox.com/styles/v1/mapbox/streets-v12?access_token=${mapboxgl.accessToken}`,
  );
  const style = await res.json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style.layers = style.layers.map((layer: any) => {
    const customPaint = allLayers[layer.id as keyof typeof allLayers];
    if (customPaint) {
      layer = { ...layer, paint: { ...layer.paint, ...customPaint } };
    }
    if (layer.type === "symbol") {
      const paint = { ...layer.paint, "text-halo-width": 0 };
      if (textColors[layer.id]) paint["text-color"] = textColors[layer.id];
      const layout = { ...layer.layout };
      if (textSizes[layer.id]) layout["text-size"] = textSizes[layer.id];
      layer = { ...layer, paint, layout };
    }
    return layer;
  });

  return style;
}

export default function MapboxMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let map: mapboxgl.Map;

    fetchStyledStyle().then((style) => {
      if (!containerRef.current) return;
      map = new mapboxgl.Map({
        container: containerRef.current,
        style,
        center: [44.8271, 41.6938],
        zoom: 13,
      });
    });

    return () => map?.remove();
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
