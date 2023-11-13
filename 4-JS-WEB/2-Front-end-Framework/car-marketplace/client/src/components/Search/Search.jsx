import { useCarOfferForm } from "../../hooks/useCarOfferForm";

import BrandSelect from "../CarOfferForm/Selects/BrandSelect";
import ModelSelect from "../CarOfferForm/Selects/ModelSelect";
import ProductionYearInput from "../CarOfferForm/Inputs/ProductionYearInput";
import FuelTypeSelect from "../CarOfferForm/Selects/FuelTypeSelect";
import ColorSelect from "../CarOfferForm/Selects/ColorSelect";
import RegionSelect from "../CarOfferForm/Selects/RegionSelect";
import TransmissionTypeSelect from "../CarOfferForm/Selects/TransmissionTypeSelect";
import PriceInput from "../CarOfferForm/Inputs/PriceInput";
import VehicleTypeSelect from "../CarOfferForm/Selects/VehicleTypeSelect";
import MileageInput from "../CarOfferForm/Inputs/MileageInput";

const Search = () => {
  const onSubmitHandler = async () => {
    const criteria = Object.entries(formValues).filter(
      ([key, value]) => value !== "" && value !== 0
    );

    console.log(criteria);
  };

  const { offerPredefinedOptions, formValues, changeHandler, submit } = useCarOfferForm(
    onSubmitHandler,
    null
  );

  return (
    <form onSubmit={submit}>
      <BrandSelect
        brands={offerPredefinedOptions.brand}
        changeHandler={changeHandler}
        selectedBrand={formValues.brand}
        isRequired={false}
      />

      <ModelSelect
        models={offerPredefinedOptions.model}
        changeHandler={changeHandler}
        selectedModel={formValues.model}
        isRequired={false}
      />

      <ProductionYearInput
        productionYear={formValues.productionYear}
        changeHandler={changeHandler}
        isRequired={false}
      />

      <FuelTypeSelect
        fuelTypes={offerPredefinedOptions.fuelType}
        changeHandler={changeHandler}
        selectedFuelType={formValues.fuelType}
        isRequired={false}
      />

      <MileageInput mileage={formValues.mileage} changeHandler={changeHandler} isRequired={false} />

      <ColorSelect
        colors={offerPredefinedOptions.color}
        changeHandler={changeHandler}
        selectedColor={formValues.color}
        isRequired={false}
      />

      <PriceInput price={formValues.price} changeHandler={changeHandler} isRequired={false} />

      <RegionSelect
        regions={offerPredefinedOptions.region}
        changeHandler={changeHandler}
        selectedRegion={formValues.region}
        isRequired={false}
      />

      <TransmissionTypeSelect
        transmissionTypes={offerPredefinedOptions.transmissionType}
        changeHandler={changeHandler}
        selectedTransmissionType={formValues.transmissionType}
        isRequired={false}
      />

      <VehicleTypeSelect
        vehicleTypes={offerPredefinedOptions.vehicleType}
        changeHandler={changeHandler}
        selectedVehicleType={formValues.vehicleType}
        isRequired={false}
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default Search;