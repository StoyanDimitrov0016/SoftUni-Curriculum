import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

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
  sellerType,
}) {
  const { userCredentials } = useAuthContext();

  return (
    <article className="vehicle-listing">
      <div className="image-container">
        <img src={image} alt={`${brand} ${model} ${productionYear}`} />
      </div>
      <div className="vehicle-details">
        <h3>{`${brand} ${model}`}</h3>
        <div className="vehicle-info">
          <p>Year: {productionYear}</p>
          <p>Price: ${price}</p>
          <p>Region: {region}</p>
          <p>Fuel Type: {fuelType}</p>
          <p>Mileage: {mileage} km</p>
          <p>
            Seller:
            {sellerType === "person" ? (
              <span>individual person</span>
            ) : (
              <>
                <span>dealership</span>
                {sellerType.type === "dealership" && userCredentials.userType !== "dealership" && (
                  <Link to={`/dealerships/${sellerType.reference}`}>check dealer</Link>
                )}
              </>
            )}
          </p>
        </div>
        <Link to={`/offer/${_id}`} className="view-details-link">
          View Details
        </Link>
      </div>
    </article>
  );
}

export default OfferPreview;
