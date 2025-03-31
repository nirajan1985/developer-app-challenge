// theme/mapStyle.ts

export const darkMapStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#1A1A1A" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#CCCCCC" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#000000" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ color: "#333333" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#222222" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#1A1A1A" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#2C2C2C" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#111111" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#888888" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#3B3B3B" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#1F1F1F" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#0B0B0B" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#3A3A3A" }],
  },
];
