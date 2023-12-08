import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCarOfferForm } from "../../hooks/useCarOfferForm";
import offerService from "../../services/offerService";
import dealershipService from "../../services/dealershipService";
import useAuthContext from "../../hooks/useAuthContext";
import userService from "../../services/userService";

import CarOfferForm from "../CarOfferForm/CarOfferForm";

const CreateOffer = () => {
  const navigate = useNavigate();

  const { userCredentials } = useAuthContext();
  const { reference, userType } = userCredentials;

  const [offerStatus, setOfferStatus] = useState({ isAbleToCreate: true, remainingOffers: null });
  const OFFER_LIMIT = 5;

  const onSubmitHandler = async (data) => {
    try {
      const updatedFormValues = { ...data };

      updatedFormValues.sellerType =
        userType === "regular" ? "person" : { type: "dealership", reference };

      const offerData = await offerService.create(updatedFormValues);

      if (userType === "dealership") {
        await dealershipService.addOfferIdToAvailableOffers(reference, offerData._id);
      }

      navigate("/my-offers");
    } catch (error) {
      console.log("An error while creating an offer occurred in CreateOffer", error);
    }
  };

  const { offerPredefinedOptions, formValues, changeHandler, submit } = useCarOfferForm(
    onSubmitHandler,
    null
  );

  useEffect(() => {
    if (userType === "regular") {
      Promise.all([
        userService.isAbleToCreate(userCredentials.userId, OFFER_LIMIT),
        userService.createdOffersCount(userCredentials.userId),
      ])
        .then(([isAble, createdOffersCount]) => {
          setOfferStatus({
            isAbleToCreate: isAble,
            remainingOffers: OFFER_LIMIT - createdOffersCount,
          });
        })
        .catch((error) => {
          console.error("Error while fetching user data", error);
        });
    }
  }, [userType]);

  return offerStatus.isAbleToCreate ? (
    <CarOfferForm
      offerPredefinedOptions={offerPredefinedOptions}
      formValues={formValues}
      changeHandler={changeHandler}
      submit={submit}
      actionType={"create"}
      remainingOffers={offerStatus.remainingOffers}
      userType={userType}
    />
  ) : (
    <p>You have exceeded your offer limit, to create more offers, you have to be a dealership.</p>
  );
};

export default CreateOffer;
