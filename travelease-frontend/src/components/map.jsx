import { GoogleMap } from "@react-google-maps/api";
import { useMemo } from "react";

function Map() {
  const center = useMemo(() => ({ lat: 43, lng: -80 }), []);

  return (
    <div className="container">
      <div className="map">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
        ></GoogleMap>
      </div>
    </div>
  );
}

export default Map;
