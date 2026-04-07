"use client";

import dynamic from "next/dynamic";

const MapboxMap = dynamic(() => import("@/components/map/mapbox"), {
  ssr: false,
});

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapboxMap />
    </div>
  );
}
