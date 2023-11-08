import { useNavigate, useParams } from "react-router-dom";
import offerService from "../../services/offerService";
import { useCarOfferForm } from "../../hooks/useCarOfferForm";
import CarOfferForm from "../CarOfferForm/CarOfferForm";

const EditOffer = () => {
  const { offerId } = useParams();
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      await offerService.update(offerId, formValues);
      navigate(`/offer/${offerId}`);
    } catch (error) {
      console.log("An error while updating an offer occurred:", error);
    }
  };

  const { offerPredefinedOptions, formValues, changeHandler, submit } = useCarOfferForm(
    onSubmit,
    offerId
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

export default EditOffer;
