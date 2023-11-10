import { useEffect, useState } from "react";
import offerService from "../../services/offerService";
import OfferPreview from "./OfferPreview";

const Catalog = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    offerService
      .getAll()
      .then((result) => setOffers(result))
      .catch((error) =>
        console.log("--- An error while fetching all offers in Catalog occurred:", error)
      );
  }, []);

  const renderContent = () => {
    if (offers.length > 0) {
      return offers.map((offer) => <OfferPreview key={offer._id} {...offer} />);
    }
    return <p>There are no offers yet</p>;
  };

  return <section className="catalog">{renderContent()}</section>;
};

export default Catalog;
