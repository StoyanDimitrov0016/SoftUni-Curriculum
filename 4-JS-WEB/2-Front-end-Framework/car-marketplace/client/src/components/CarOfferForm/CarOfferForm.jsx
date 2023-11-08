import BrandSelect from "./Selects/BrandSelect";
import ModelSelect from "./Selects/ModelSelect";
import ColorSelect from "./Selects/ColorSelect";
import FuelTypeSelect from "./Selects/FuelTypeSelect";
import RegionSelect from "./Selects/RegionSelect";
import TransmissionTypeSelect from "./Selects/TransmissionTypeSelect";
import VehicleTypeSelect from "./Selects/VehicleTypeSelect";
import ProductionYearInput from "./Inputs/ProductionYearInput";
import MileageInput from "./Inputs/MileageInput";
import PriceInput from "./Inputs/PriceInput";
import ContactInformationInput from "./Inputs/ContactInformationInput";
import DescriptionInput from "./Inputs/DescriptionInput";

const CarOfferForm = ({ offerPredefinedOptions, formValues, changeHandler, submit }) => {

  return (
    <form className="new-offer-form" onSubmit={submit}>
      <BrandSelect
        brands={offerPredefinedOptions.brand}
        changeHandler={changeHandler}
        selectedBrand={formValues.brand}
      />

      <ModelSelect
        models={offerPredefinedOptions.model}
        changeHandler={changeHandler}
        selectedModel={formValues.model}
      />

      <ProductionYearInput
        productionYear={formValues.productionYear}
        changeHandler={changeHandler}
      />

      <FuelTypeSelect
        fuelTypes={offerPredefinedOptions.fuelType}
        changeHandler={changeHandler}
        selectedFuelType={formValues.fuelType}
      />

      <MileageInput mileage={formValues.mileage} changeHandler={changeHandler} />

      <ColorSelect
        colors={offerPredefinedOptions.color}
        changeHandler={changeHandler}
        selectedColor={formValues.color}
      />

      <PriceInput price={formValues.price} changeHandler={changeHandler} />

      <RegionSelect
        regions={offerPredefinedOptions.region}
        changeHandler={changeHandler}
        selectedRegion={formValues.region}
      />

      <TransmissionTypeSelect
        transmissionTypes={offerPredefinedOptions.transmissionType}
        changeHandler={changeHandler}
        selectedTransmissionType={formValues.transmissionType}
      />

      <VehicleTypeSelect
        vehicleTypes={offerPredefinedOptions.vehicleType}
        changeHandler={changeHandler}
        selectedVehicleType={formValues.vehicleType}
      />

      <ContactInformationInput
        contactInformation={formValues.contactInformation}
        changeHandler={changeHandler}
      />

      <DescriptionInput description={formValues.description} changeHandler={changeHandler} />

      <label htmlFor="image">Image:</label>
      <input
        type="text"
        id="image"
        name="image"
        placeholder="https://"
        required
        value={formValues.image}
        onChange={changeHandler}
      />

      <button type="submit">Create Offer</button>
    </form>
  );
};

export default CarOfferForm;
