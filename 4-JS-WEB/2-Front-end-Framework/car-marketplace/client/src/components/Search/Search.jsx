import { useEffect, useState } from "react";

import { useCarOfferForm } from "../../hooks/useCarOfferForm";
import searchService from "../../services/searchService";

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
import OfferPreview from "../Catalog/OfferPreview";
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const locationSearch = useLocation();

  const [matches, setMatches] = useState([]);

  const queryString = locationSearch.search.slice(1);
  const searchParameters = queryString.split("&").map((qs) => qs.split("="));

  const onSubmitHandler = async () => {
    const criteria = Object.entries(formValues).filter(([key, value]) => Boolean(value));

    const foundOffers = await searchService.search(criteria);

    setMatches(foundOffers);
    const url = criteria.map(([key, value]) => `${key}=${value}`).join("&");
    navigate(`/search?${url}`);
  };

  const {
    offerPredefinedOptions,
    formValues,
    changeHandler,
    submit,
    setFormValues,
    resetFormValues,
  } = useCarOfferForm(onSubmitHandler, null);

  useEffect(() => {
    searchService
      .search(searchParameters)
      .then((result) => setMatches(result))
      .catch((error) => console.log("Error while fetching offers in search page:", error));

    setFormValues((state) => ({ ...state, ...Object.fromEntries(searchParameters) }));
  }, [locationSearch]);

  return (
    <>
      <form className="search-form" onSubmit={submit}>
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

        <button className="clear" onClick={resetFormValues}>
          Clear
        </button>
        <button type="submit">Search</button>
      </form>

      {matches.length >= 1 ? (
        <section className="content-container">
          {matches.map((m) => (
            <OfferPreview key={m._id} {...m} />
          ))}
        </section>
      ) : (
        <p className="no-matches message">No offers match this criteria</p>
      )}
    </>
  );
};

export default Search;
