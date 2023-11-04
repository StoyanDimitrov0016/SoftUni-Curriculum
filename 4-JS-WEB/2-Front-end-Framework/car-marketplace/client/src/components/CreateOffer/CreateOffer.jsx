import React, { useEffect, useState } from "react";
import offerService from "../../services/offerService";
import { useNavigate } from "react-router-dom";

const keys = {
  brand: "brand",
  model: "model",
  productionYear: "productionYear",
  fuelType: "fuelType",
  mileage: "mileage",
  color: "color",
  price: "price",
  region: "region",
  transmissionType: "transmissionType",
  vehicleType: "vehicleType",
  contactInformation: "contactInformation",
  description: "description",
  image: "image",
};

const CreateOffer = () => {
  const [offerPredefinedOptions, setOfferPredefinedOptions] = useState({
    [keys.brand]: [],
    [keys.model]: [],
    [keys.fuelType]: [],
    [keys.color]: [],
    [keys.region]: [],
    [keys.transmissionType]: [],
    [keys.vehicleType]: [],
  });

  const [offerValues, setOfferValues] = useState({
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
  //     .getBrandModels(offerValues.brand)
  //     .then((models) => {
  //       setOfferPredefinedOptions((state) => ({
  //         ...state,
  //         [keys.model]: models,
  //       }));
  //     })
  //     .catch((error) =>
  //       console.log("--- An error while fetching brand models in CreateOffer occurred:", error)
  //     );
  // }, [offerValues.brand]);

  const loadModels = () => {
    offerService
      .getBrandModels(offerValues.brand)
      .then((models) => {
        setOfferPredefinedOptions((state) => ({
          ...state,
          [keys.model]: models,
        }));
      })
      .catch((error) =>
        console.log("--- An error while fetching brand models in CreateOffer occurred:", error)
      );
  };

  const onChangeHandler = (e) => {
    let { name, value } = e.target;

    if (name === keys.productionYear || name === keys.mileage || name === keys.price) {
      value = Number(value);
    }

    setOfferValues((state) => ({ ...state, [name]: value }));
  };
  
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    await offerService.create(offerValues);
    //TODO: navigate to my offers
    navigate("/");
  };

  return (
    <form className="new-offer-form" onSubmit={onSubmitHandler}>
      <label htmlFor="brand">Brand:</label>
      <select id="brand" name={keys.brand} required onChange={onChangeHandler} onBlur={loadModels}>
        <option value="">Please select</option>
        {offerPredefinedOptions.brand.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="model">Model:</label>
      <select id="model" name={keys.model} required onChange={onChangeHandler} >
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
        name={keys.productionYear}
        required
        value={offerValues[keys.productionYear] || ""}
        onChange={onChangeHandler}
      />

      <label htmlFor="fuelType">Fuel Type:</label>
      <select id="fuelType" name={keys.fuelType} required onChange={onChangeHandler}>
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
        name={keys.mileage}
        required
        value={offerValues.mileage || ""}
        onChange={onChangeHandler}
      />

      <label htmlFor="color">Color:</label>
      <select id="color" name={keys.color} required onChange={onChangeHandler}>
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
        name={keys.price}
        required
        value={offerValues.price || ""}
        onChange={onChangeHandler}
      />

      <label htmlFor="region">Region:</label>
      <select id="region" name={keys.region} required onChange={onChangeHandler}>
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
        name={keys.transmissionType}
        required
        onChange={onChangeHandler}
      >
        <option value="">Please select</option>
        {offerPredefinedOptions.transmissionType.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="vehicleType">Vehicle Type:</label>
      <select id="vehicleType" name={keys.vehicleType} required onChange={onChangeHandler}>
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
        name={keys.contactInformation}
        placeholder="tel. or email"
        required
        value={offerValues.contactInformation}
        onChange={onChangeHandler}
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name={keys.description}
        required
        value={offerValues.description}
        onChange={onChangeHandler}
      ></textarea>

      <label htmlFor="image">Image:</label>
      <input
        type="text"
        id="image"
        name={keys.image}
        placeholder="https://"
        required
        value={offerValues.image}
        onChange={onChangeHandler}
      />

      <button type="submit">Create Offer</button>
    </form>
  );
};

export default CreateOffer;
