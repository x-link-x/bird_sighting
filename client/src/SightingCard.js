import { deleteSighting } from "./SightingService";
import Delete from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";

const SightingCard = ({ sighting, removeSighting }) => {
  const handleDelete = () => {
    deleteSighting(sighting._id).then(() => {
      removeSighting(sighting._id);
    });
  };
  return (
    <>
      <h1>{sighting.species}</h1>
      <p>Location: {sighting.location}</p>
      <p>Date: {sighting.date}</p>
      <Button onClick={handleDelete}>
        <Delete color="secondary" />
      </Button>
      <hr></hr>
    </>
  );
};

export default SightingCard;
