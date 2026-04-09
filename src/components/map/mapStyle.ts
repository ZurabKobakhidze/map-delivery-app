// ─── LANDSCAPE ──────────────────────────────────────────────────────────────
export const land = {
  "land":                        { "background-color": "#1a1a1a" },
  "landcover":                   { "fill-color": "#1e1e1e", "fill-opacity": 0.5 },
  "national-park":               { "fill-color": "#1a2e1a", "fill-opacity": 0.8 },
  "landuse":                     { "fill-color": "#222222", "fill-opacity": 0.6 },
};

// ─── WATER ──────────────────────────────────────────────────────────────────
export const water = {
  "water":                       { "fill-color": "#1a3a5c" },
  "water-shadow":                { "fill-color": "#0f2a42" },
  "waterway":                    { "line-color": "#1a3a5c" },
  "waterway-shadow":             { "line-color": "#0f2a42" },
};

// ─── BUILDINGS ──────────────────────────────────────────────────────────────
export const buildings = {
  "building":                    { "fill-color": "#2a2a2a", "fill-outline-color": "#333333" },
  "building-underground":        { "fill-color": "#1f1f1f", "fill-outline-color": "#2a2a2a" },
};

// ─── ROADS ──────────────────────────────────────────────────────────────────
export const roads = {
  // Fill/surface
  "road-motorway-trunk":         { "line-color": "#555555" },
  "road-primary":                { "line-color": "#444444" },
  "road-secondary-tertiary":     { "line-color": "#3a3a3a" },
  "road-street":                 { "line-color": "#333333" },
  "road-street-low":             { "line-color": "#333333" },
  "road-minor":                  { "line-color": "#2e2e2e" },
  "road-minor-link":             { "line-color": "#2e2e2e" },
  "road-major-link":             { "line-color": "#444444" },
  "road-pedestrian":             { "line-color": "#2a2a2a" },
  "road-path":                   { "line-color": "#2a2a2a" },
  "road-construction":           { "line-color": "#333333" },
  // Case (outlines)
  "road-motorway-trunk-case":    { "line-color": "#666666" },
  "road-primary-case":           { "line-color": "#555555" },
  "road-secondary-tertiary-case":{ "line-color": "#444444" },
  "road-street-case":            { "line-color": "#3a3a3a" },
  "road-minor-case":             { "line-color": "#333333" },
  // Tunnels
  "tunnel-motorway-trunk":       { "line-color": "#3a3a3a" },
  "tunnel-primary":              { "line-color": "#333333" },
  "tunnel-secondary-tertiary":   { "line-color": "#2e2e2e" },
  "tunnel-street":               { "line-color": "#2a2a2a" },
  "tunnel-minor":                { "line-color": "#262626" },
  // Bridges
  "bridge-motorway-trunk":       { "line-color": "#555555" },
  "bridge-primary":              { "line-color": "#444444" },
  "bridge-secondary-tertiary":   { "line-color": "#3a3a3a" },
  "bridge-street":               { "line-color": "#333333" },
  "bridge-minor":                { "line-color": "#2e2e2e" },
};

// ─── ADMIN BOUNDARIES ───────────────────────────────────────────────────────
export const admin = {
  "admin-0-boundary":            { "line-color": "#555555" },
  "admin-0-boundary-bg":        { "line-color": "#333333" },
  "admin-1-boundary":            { "line-color": "#444444" },
  "admin-1-boundary-bg":        { "line-color": "#2a2a2a" },
};

// ─── TEXT COLORS ─────────────────────────────────────────────────────────────
export const textColors: Record<string, string> = {
  "country-label":               "#ffffff",
  "state-label":                 "#ffffff",
  "settlement-major-label":      "#ffffff",
  "settlement-minor-label":      "#cccccc",
  "settlement-subdivision-label":"#aaaaaa",
  "road-label":                  "#999999",
  "path-pedestrian-label":       "#888888",
  "waterway-label":              "#6699cc",
  "water-line-label":            "#6699cc",
  "water-point-label":           "#6699cc",
  "natural-line-label":          "#88aa88",
  "natural-point-label":         "#88aa88",
  "poi-label":                   "#aaaaaa",
  "transit-label":               "#aaaaaa",
  "airport-label":               "#aaaaaa",
  "building-number-label":       "#666666",
  "block-number-label":          "#666666",
};

// ─── TEXT SIZES ──────────────────────────────────────────────────────────────
export const textSizes: Record<string, number> = {
  "country-label":               16,
  "state-label":                 14,
  "settlement-major-label":      14,
  "settlement-minor-label":      12,
  "road-label":                  11,
  "poi-label":                   11,
};
