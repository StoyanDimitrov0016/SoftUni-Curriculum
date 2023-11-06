import React, { useEffect, useState } from "react";
import offerService from "../../services/offerService";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const CreateOffer = () => {
  const [offerPredefinedOptions, setOfferPredefinedOptions] = useState({
    brand: [],
    model: [],
    fuelType: [],
    color: [],
    region: [],
    transmissionType: [],
    vehicleType: [],
  });

  const { formValues, changeHandler, onSubmit } = useForm({
    brand: "",
    model: "",
    productionYear: 0,
    fuelType: "",
    mileage: 0,
    color: "",
    price: 0,
    region: "",
    transmissionType: "",
    vehicleType: "",
    contactInformation: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    offerService
      .getOfferOptions()
      .then((options) => setOfferPredefinedOptions((state) => ({ ...state, ...options })))
      .catch((error) =>
        console.log("--- An error while fetching all offer options in CreateOffer occurred:", error)
      );
  }, []);

  // useEffect(() => {
  //   offerService
  //     .getBrandModels(formValues.brand)
  //     .then((models) => {
  //       setOfferPredefinedOptions((state) => ({
  //         ...state,
  //         [keys.model]: models,
  //       }));
  //     })
  //     .catch((error) =>
  //       console.log("--- An error while fetching brand models in CreateOffer occurred:", error)
  //     );
  // }, [formValues.brand]);

  const loadModels = () => {
    offerService
      .getBrandModels(formValues.brand)
      .then((models) => {
        setOfferPredefinedOptions((state) => ({
          ...state,
          model: models,
        }));
      })
      .catch((error) =>
        console.log("--- An error while fetching brand models in CreateOffer occurred:", error)
      );
  };

  return (
    <form className="new-offer-form" onSubmit={onSubmit}>
      <label htmlFor="brand">Brand:</label>
      <select id="brand" name="brand" required onChange={changeHandler} onBlur={loadModels}>
        <option value="">Please select</option>
        {offerPredefinedOptions.brand.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="model">Model:</label>
      <select id="model" name="model" required onChange={changeHandler}>
        <option value="">Please select</option>
        {offerPredefinedOptions.model.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="year">Production year:</label>
      <input
        type="number"
        id="year"
        name="productionYear"
        required
        value={formValues.productionYear || ""}
        onChange={changeHandler}
      />

      <label htmlFor="fuelType">Fuel Type:</label>
      <select id="fuelType" name="fuelType" required onChange={changeHandler}>
        <option value="">Please select</option>
        {offerPredefinedOptions.fuelType.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="mileage">Mileage (in kilometers):</label>
      <input
        type="number"
        id="mileage"
        name="mileage"
        required
        value={formValues.mileage || ""}
        onChange={changeHandler}
      />

      <label htmlFor="color">Color:</label>
      <select id="color" name="color" required onChange={changeHandler}>
        <option value="">Please select</option>
        {offerPredefinedOptions.color.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        required
        value={formValues.price || ""}
        onChange={changeHandler}
      />

      <label htmlFor="region">Region:</label>
      <select id="region" name="region" required onChange={changeHandler}>
        <option value="">Please select</option>
        {offerPredefinedOptions.region.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="transmissionType">Transmission Type:</label>
      <select
        id="transmissionType"
        name="transmissionType"
        required
        onChange={changeHandler}
      >
        <option value="">Please select</option>
        {offerPredefinedOptions.transmissionType.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="vehicleType">Vehicle Type:</label>
      <select id="vehicleType" name="vehicleType" required onChange={changeHandler}>
        <option value="">Please select</option>
        {offerPredefinedOptions.vehicleType.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="contactInformation">Contact Information:</label>
      <input
        type="text"
        id="contactInformation"
        name="contactInformation"
        placeholder="tel. or email"
        required
        value={formValues.contactInformation}
        onChange={changeHandler}
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        required
        value={formValues.description}
        onChange={changeHandler}
      ></textarea>

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

export default CreateOffer;
