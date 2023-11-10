import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import offerService from "../../services/offerService";

function DetailsPreview({
  _id,
  _ownerId,
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
}) {
  const { userCredentials } = useAuthContext();
  const userId = userCredentials.userId;

  const addToWatchList = async () => {
    
  };

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
      <div className="offer-actions">
        {_ownerId === userId ? (
          <>
            <Link to={`/offer/edit/${_id}`} className="details-link">
              Edit
            </Link>
            <Link to={`/offer/delete/${_id}`} className="details-link">
              Delete
            </Link>
          </>
        ) : (
          <Link to={`/offer/like/${_id}`} className="details-link">
            Add to watch list
          </Link>
        )}
      </div>
    </div>
  );
}

export default DetailsPreview;
