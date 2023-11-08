import React, { useEffect, useState } from "react";
import offerService from "../../services/offerService";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useCarOfferForm } from "../../hooks/useCarOfferForm";
import CarOfferForm from "../CarOfferForm/CarOfferForm";

const CreateOffer = () => {
  const navigate = useNavigate();

  const onSubmitHandler = async () => {
    try {
      await offerService.create(formValues);
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