import React, { useRef } from "react";
import { MapContainer } from "react-leaflet";
import { FullscreenControl } from "react-leaflet-fullscreen";
import useAppBarHeight from "../hooks/useAppBarHeight";
import MapContent from "./MapContent";

const Home = () => {
  const mapRef = useRef();
  const appBarHeight = useAppBarHeight();

  return (
    <MapContainer
      ref={mapRef}
      center={[10.7937792, 106.6041344]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: `calc(100vh - ${appBarHeight}px)` }}
    >
      <MapContent />
      <FullscreenControl position="topright" />
    </MapContainer>
  );
};

export default Home;
