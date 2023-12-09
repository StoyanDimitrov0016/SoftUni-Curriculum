import MileageInput from "../CarOfferForm/Inputs/MileageInput";
import PriceInput from "../CarOfferForm/Inputs/PriceInput";
import ProductionYearInput from "../CarOfferForm/Inputs/ProductionYearInput";
import BrandSelect from "../CarOfferForm/Selects/BrandSelect";
import ColorSelect from "../CarOfferForm/Selects/ColorSelect";
import FuelTypeSelect from "../CarOfferForm/Selects/FuelTypeSelect";
import ModelSelect from "../CarOfferForm/Selects/ModelSelect";
import RegionSelect from "../CarOfferForm/Selects/RegionSelect";
import TransmissionTypeSelect from "../CarOfferForm/Selects/TransmissionTypeSelect";
import VehicleTypeSelect from "../CarOfferForm/Selects/VehicleTypeSelect";

const SearchForm = ({
  offerPredefinedOptions,
  formValues,
  changeHandler,
  submit,
  resetFormValues,
  isLoading,
}) => {
  return (
    <form className="search-form" onSubmit={submit}>
      <div className="form-first-half">
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

        <MileageInput
          mileage={formValues.mileage}
          changeHandler={changeHandler}
          isRequired={false}
        />
      </div>

      <div className="form-second-half">
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
      </div>

      <div className="controllers">
        <button className="clear" onClick={resetFormValues}>
          Clear
        </button>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </button>
      </div>

    </form>
  );
};

export default SearchForm;
