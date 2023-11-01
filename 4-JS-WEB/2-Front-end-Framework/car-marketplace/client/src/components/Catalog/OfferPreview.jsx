import React from "react";
import { Link } from "react-router-dom";

function OfferPreview({
  id,
  brand,
  model,
  image,
  productionYear,
  region,
  price,
  mileage,
  fuelType,
}) {
  return (
    <article className="vehicle-listing">
      <img src={image} alt={`${brand} ${model}`} />
      <h3>{`${brand} ${model}`}</h3>
      <p>Year: {productionYear}</p>
      <p>Price: ${price}</p>
      <p>Region: {region}</p>
      <p>Fuel Type: {fuelType}</p>
      <p>Mileage: {mileage} miles</p>
      <Link to={`/offer/${id}`}>View Details</Link>
    </article>
  );
}

export default OfferPreview;
