import { useState, useEffect } from "react";
import offerService from "../../services/offerService";
import { useAuthContext } from "../../contexts/AuthContext";
import OfferPreview from "../Catalog/OfferPreview";

const MyOffers = () => {
  const { userId } = useAuthContext();
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    offerService
      .getUserOffers(userId)
      .then((result) => {
        setOffers(result);
      })
      .catch((error) => {
        console.error("Error fetching user offers:", error);
      });
  }, []);
  
//TODO: Make offer preview component to receive class names so it becomes a reusable component

  const renderContent = () => {
    if (offers.length > 0) {
      return offers.map((offer) => <OfferPreview key={offer.id} {...offer} />);
    }
    return <p>There are no offers yet</p>;
  };

  return (
    <div className="my-offers">
      <h1 className="my-offers-title">My Offers</h1>

      {renderContent()}
    </div>
  );
};

export default MyOffers;
