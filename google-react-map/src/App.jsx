import { Map, Marker } from "pigeon-maps";
import { useState } from "react";

function App() {
  const [center, setCenter] = useState([23.7182, 90.3678]);
  const [zoom, setZoom] = useState(20);

  return (
    <>
      <Map height={600} defaultCenter={[23.7182, 90.3678]} defaultZoom={11}>
        <Marker width={50} anchor={[23.7182, 90.3678]} />
      </Map>
    </>
  );
}

export default App;
