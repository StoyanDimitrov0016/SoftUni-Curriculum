import { useNavigate } from "react-router-dom";
import offerService from "../../services/offerService";

import { useAuthContext } from "../../contexts/AuthContext";
import { useCarOfferForm } from "../../hooks/useCarOfferForm";
import dealershipService from "../../services/dealershipService";

import CarOfferForm from "../CarOfferForm/CarOfferForm";

const CreateOffer = () => {
  const navigate = useNavigate();

  const { userCredentials } = useAuthContext();
  const { reference, userType } = userCredentials;

  const onSubmitHandler = async () => {
    try {
      const updatedFormValues = { ...formValues };

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

  return (
    <CarOfferForm
      offerPredefinedOptions={offerPredefinedOptions}
      formValues={formValues}
      changeHandler={changeHandler}
      submit={submit}
      actionType={"create"}
    />
  );
};

export default CreateOffer;
