import { Link } from "react-router-dom";

function OfferPreview({
  _id,
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
      <div className="image-container">
        <img src={image} alt={`${brand} ${model}`} />
      </div>
      <div className="vehicle-details">
        <h3>{`${brand} ${model}`}</h3>
        <div className="vehicle-info">
          <p>Year: {productionYear}</p>
          <p>Price: ${price}</p>
          <p>Region: {region}</p>
          <p>Fuel Type: {fuelType}</p>
          <p>Mileage: {mileage} km</p>
        </div>
        <Link to={`/offer/${_id}`} className="view-details-link">
          View Details
        </Link>
      </div>
    </article>
  );
}

export default OfferPreview;
