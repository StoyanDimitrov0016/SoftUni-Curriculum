import { Link } from "react-router-dom";
import PROTECTED_ROUTES from "../../Routes/protectedRoutes";

function DetailsPreview({
  offer: {
    _id,
    brand,
    model,
    productionYear,
    fuelType,
    mileage,
    color,
    price,
    region,
    transmissionType,
    vehicleType,
    contactInformation,
    description,
    image,
    watchlistCount,
    canAdd,
    isOwner,
  },
  isDeleting,
  deleteClickHandler,
  cancelDeleteClickHandler,
  confirmDeleteClickHandler,
  addToWatchList,
  removeFromWatchList,
}) {
  const ownerActions = (
    <>
      {isDeleting ? (
        <div className="confirmation-box">
          <p>Are you sure you want to delete this offer?</p>
          <button onClick={confirmDeleteClickHandler}>Confirm</button>
          <button onClick={cancelDeleteClickHandler}>Cancel</button>
        </div>
      ) : (
        <>
          <Link to={PROTECTED_ROUTES.EDIT_OFFER.dynamicPath(_id)} className="details-link">
            Edit
          </Link>
          <button className="details-link" onClick={deleteClickHandler}>
            Delete
          </button>
        </>
      )}
    </>
  );

  const watcherActions = (
    <>
      {canAdd ? (
        <button className="add-to-watchlist-btn" onClick={addToWatchList}>
          Add to watchlist
        </button>
      ) : (
        <button className="remove-from-watchlist-btn" onClick={removeFromWatchList}>
          Remove from watch list
        </button>
      )}
    </>
  );

  return (
    <div className="details-container">
      <div className="car-image">
        <img src={image} alt={`${brand}`} />
      </div>
      <div className="car-properties">
        <h2>
          {brand} {model}
        </h2>
        <ul>
          <li>{watchlistCount} watchers</li>
          <li>Year: {productionYear}</li>
          <li>Price: ${price}</li>
          <li>City: {region}</li>
          <li>Fuel Type: {fuelType}</li>
          <li>Mileage: {mileage} miles</li>
          <li>Color: {color}</li>
          <li>Transmission Type: {transmissionType}</li>
          <li>Vehicle Type: {vehicleType}</li>
          <li>Contact Information: {contactInformation}</li>
          <li>Description: {description}</li>
        </ul>
      </div>
      <div className="offer-actions">{isOwner ? ownerActions : watcherActions}</div>
    </div>
  );
}

export default DetailsPreview;
