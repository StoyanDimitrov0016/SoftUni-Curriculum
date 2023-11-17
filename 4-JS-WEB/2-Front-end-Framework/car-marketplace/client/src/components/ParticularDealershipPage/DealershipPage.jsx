import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dealershipService from "../../services/dealershipService";
import offerService from "../../services/offerService";
import DealershipPreview from "./DealershipPreview";

const DealershipPage = () => {
  const { dealershipId } = useParams();

  const [dealerInfo, setDealerInfo] = useState({});
  const [currentOffers, setCurrentOffers] = useState([]);

  const loadAvailableOffers = async (availableOffers) => {
      for (let i = 0; i < availableOffers.length; i++) {
        const offerId = availableOffers[i];

        try {
          const offer = await offerService.getOne(offerId);
          setCurrentOffers((state) => [...state, offer]);
        } catch (error) {
          console.log("Error while fetching offer:", error);
        }
      }
  };

  const addComment = async () => {};
  const addStarReview = async () => {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const receivedDealership = await dealershipService.getDealershipEntity(dealershipId);

        setDealerInfo(receivedDealership);
        // debugger
         await loadAvailableOffers(receivedDealership.availableOffers);
      } catch (error) {
        console.log("Error while fetching dealership info", error);
      }
    };

    fetchData();
  }, [dealershipId]);

  console.log(currentOffers);

  return (
    <DealershipPreview
      dealershipInfo={dealerInfo}
      currentOffers={currentOffers}
      addComment={addComment}
      addStarReview={addStarReview}
    />
  );
};

export default DealershipPage;
