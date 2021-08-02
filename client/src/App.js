import { useState, useEffect } from "react";

import "./App.css";

import SightingsForm from "./SightingsForm";
import SightingsGrid from "./SightingsGrid";
import { getSightings, postSighting, deleteSighting } from "./SightingService";

function App() {
  const [birdSightings, setBirdSightings] = useState([]);

  useEffect(() => {
    getSightings().then((allSightings) => {
      setBirdSightings(allSightings);
    });
  }, []);

  const addSighting = (sighting) => {
    postSighting(sighting).then(data => setBirdSightings([...birdSightings, data]))
  };

  const removeSighting = (id) => {
    deleteSighting(id).then(data => setBirdSightings(data))
  };

  return (
    <>
      <SightingsForm addSighting={addSighting} />
      <SightingsGrid
        sightings={birdSightings}
        removeSighting={removeSighting}
      />
    </>
  );
}

export default App;
