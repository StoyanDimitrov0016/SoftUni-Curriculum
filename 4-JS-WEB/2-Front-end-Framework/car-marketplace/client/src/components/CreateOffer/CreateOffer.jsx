import React, { useEffect, useState } from "react";
import offerService from "../../services/offerService";

import { useNavigate } from "react-router-dom";
import { useCarOfferForm } from "../../hooks/useCarOfferForm";
import CarOfferForm from "../CarOfferForm/CarOfferForm";
import { useAuthContext } from "../../contexts/AuthContext";
import dealershipService from "../../services/dealershipService";

const CreateOffer = () => {
  const navigate = useNavigate();
  const { userCredentials } = useAuthContext();
  const { reference, userType } = userCredentials;

  const onSubmitHandler = async () => {
    try {
      const offerData = await offerService.create(formValues);

      if (userType === "dealership") {
        const result = await dealershipService.addOfferIdToAvailableOffers(
          reference,
          offerData._id
        );
        console.log(result);
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

  return (
    <CarOfferForm
      offerPredefinedOptions={offerPredefinedOptions}
      formValues={formValues}
      changeHandler={changeHandler}
      submit={submit}
    />
  );
};

export default CreateOffer;
