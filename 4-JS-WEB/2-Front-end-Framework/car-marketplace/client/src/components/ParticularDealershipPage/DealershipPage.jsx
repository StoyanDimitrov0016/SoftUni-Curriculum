import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dealershipService from "../../services/dealershipService";
import offerService from "../../services/offerService";
import DealershipPreview from "./DealershipPreview";

const DealershipPage = () => {
  const { dealershipId } = useParams();

  const [dealerInfo, setDealerInfo] = useState({});
  const [currentOffers, setCurrentOffers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [userReview, setUserReview] = useState({ stars: 0, comment: "" });

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

  const loadComments = async () => {
    const fetchedReviews = await dealershipService.getReviewsForSpecificDealership(dealershipId);
    console.log(fetchedReviews);
    setReviews([...fetchedReviews]);
  };

  const changeHandler = (e) => {
    e.preventDefault();

    setUserReview((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
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
        await loadComments();
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
      reviews={reviews}
      userReview={userReview}
      changeHandler={changeHandler}
      addComment={addComment}
      addStarReview={addStarReview}
    />
  );
};

export default DealershipPage;
