import React from "react";
import { Link } from "react-router-dom";

function DetailsPreview({
  _id,
  ownerId,
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
  //TODO: Get actual userId
  const userId = ownerId;
  return (
    <div className="details-container">
      <div className="car-image">
        <img src={image} alt={`${brand}`} />
      </div>
      <div className="car-properties">
        <h2>
          {brand} {model}
        </h2>
        <p>Year: {productionYear}</p>
        <p>Price: ${price}</p>
        <p>City: {region}</p>
        <p>Fuel Type: {fuelType}</p>
        <p>Mileage: {mileage} miles</p>
        <p>Color: {color}</p>
        <p>Transmission Type: {transmissionType}</p>
        <p>Vehicle Type: {vehicleType}</p>
        <p>Contact Information: {contactInformation}</p>
        <p>Description: {description}</p>
      </div>
      <div className="offer-actions">
        <Link to={"#"} className="details-link">
          Like
        </Link>
        {ownerId == userId && (
          <>
            <Link to={"#"} className="details-link">
              Edit
            </Link>
            <Link to={"#"} className="details-link">
              Delete
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default DetailsPreview;
