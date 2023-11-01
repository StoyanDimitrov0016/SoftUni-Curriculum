import React, { useEffect, useState } from "react";
import offerService from "../../services/offerService";
import OfferPreview from "./OfferPreview";

const Catalog = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    offerService
      .getAll()
      .then((result) => setOffers(result))
      .catch((error) =>
        console.log(
          "--- An error while fetching all offers in Catalog occurred:",
          error
        )
      );
  }, []);

  return (
    <section className="catalog">
      {offers.length >= 1 ? (
        offers.map((offer) => <OfferPreview key={offer.id} {...offer}/>)
      ) : (
        <p>There are no offers yet</p>
      )}
    </section>
  );
};

export default Catalog;
