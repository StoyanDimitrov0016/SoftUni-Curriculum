import { useState, useEffect } from "react";

import useAuthContext from "../../hooks/useAuthContext";

import offerService from "../../services/offerService";
import OfferPreview from "../Catalog/OfferPreview";

const MyOffers = () => {
  const { userCredentials } = useAuthContext();
  const userId = userCredentials.userId;

  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    offerService
      .getUserOffers(userId)
      .then((result) => {
        setOffers(result);
      })
      .catch((error) => {
        console.error("Error fetching user offers:", error);
      })
      .finally(() => setIsLoading(false));
  }, [userId]);

  const RenderContent = () => {
    if (offers.length > 0) {
      return offers.map((offer) => <OfferPreview key={offer._id} {...offer} />);
    }
    return <p>There are no offers yet</p>;
  };

  return (
    <div className="my-offers">
      <h1 className="my-offers-title">My Offers</h1>
      {isLoading ? <h3>Loading...</h3> : <div className="list">{<RenderContent/>}</div>}
    </div>
  );
};

export default MyOffers;
