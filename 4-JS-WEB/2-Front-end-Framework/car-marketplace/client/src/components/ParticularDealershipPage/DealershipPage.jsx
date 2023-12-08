import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import dealershipService from "../../services/dealershipService";
import offerService from "../../services/offerService";
import DealershipPreview from "./DealershipPreview";
import { useForm } from "../../hooks/useForm";
import useAuthContext from "../../hooks/useAuthContext";

import reviewsService from "../../services/reviewService";
import {} from "../../services/endpoints";

const DealershipPage = () => {
  const { dealershipId } = useParams();
  const { userCredentials } = useAuthContext();

  const [dealerInfo, setDealerInfo] = useState({});
  const [currentOffers, setCurrentOffers] = useState([]);
  const [reviews, setReviews] = useState([]);

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
    const fetchedReviews = await reviewsService.getReviewsForSpecificDealership(dealershipId);

    setReviews([...fetchedReviews]);
  };

  const onSubmitHandler = async () => {
    const { firstName, lastName } = userCredentials;

    try {
      const userReview = {
        firstName,
        lastName,
        reference: dealershipId,
        stars: formValues.stars,
        comment: formValues.comment.trim(),
      };

      await reviewsService.addReview(userReview);
      resetFromValues();
      await loadComments();
    } catch (error) {
      console.log("Error while uploading the review", error);
    }
  };

  const { formValues, changeHandler, onSubmit, resetFromValues } = useForm(
    {
      stars: 0,
      comment: "",
    },
    onSubmitHandler,
    ["stars"]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const receivedDealership = await dealershipService.getDealershipEntity(dealershipId);

        setDealerInfo(receivedDealership);

        await loadAvailableOffers(receivedDealership.availableOffers);
        await loadComments();
      } catch (error) {
        console.log("Error while fetching dealership info", error);
      }
    };

    fetchData();
  }, [dealershipId]);

  return (
    <DealershipPreview
      dealershipInfo={dealerInfo}
      currentOffers={currentOffers}
      reviews={reviews}
      userReview={formValues}
      onSubmit={onSubmit}
      changeHandler={changeHandler}
      isRegularUser={userCredentials.userType === "regular"}
    />
  );
};

export default DealershipPage;
