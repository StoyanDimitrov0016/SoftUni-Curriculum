import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import offerService from "../../services/offerService";
import DetailsPreview from "./DetailsPreview";

const Details = () => {
  const [offer, setOffer] = useState({
    _id: "",
    _ownerId: "",
    brand: "",
    model: "",
    productionYear: 0,
    fuelType: "",
    mileage: 0,
    color: "",
    price: 0,
    region: "",
    transmissionType: "",
    vehicleType: "",
    contactInformation: "",
    description: "",
    image: "",
  });

  const { offerId } = useParams();

  useEffect(() => {
    offerService
      .getOne(offerId)
      .then((result) => setOffer(result))
      .catch((error) =>
        console.log("--- An error while fetching current offer in OfferPreview occurred:", error)
      );
  }, [offerId]);

  return <DetailsPreview {...offer} />;
};

export default Details;
