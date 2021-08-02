import SightingCard from "./SightingCard";
import Grid from "@material-ui/core/Grid";

const SightingsGrid = ({ sightings, removeSighting }) => {
  if (sightings.error) {
    return sightings.error;
  }

  const sightingsList = sightings.map((sighting) => {
    return (
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <SightingCard
          key={sighting._id}
          sighting={sighting}
          removeSighting={removeSighting}
        />
      </Grid>
    );
  });

  return (
    <Grid container spacing={2}>
      {sightingsList}
    </Grid>
  );
};

export default SightingsGrid;
