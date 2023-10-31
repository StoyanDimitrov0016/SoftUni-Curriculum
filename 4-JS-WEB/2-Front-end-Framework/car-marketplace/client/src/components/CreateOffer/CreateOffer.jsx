import React from "react";

const CreateOffer = () => {
  //Idea: to show the result before posting for further mitigating occurred mistakes
  return (
    <form className="new-offer-form">
      <label htmlFor="brand">Brand:</label>
      <input type="text" id="brand" name="brand" required />

      <label htmlFor="model">Model:</label>
      <input type="text" id="model" name="model" required />

      <label htmlFor="year">Production year:</label>
      <input type="number" id="year" name="year" required />

      <label htmlFor="fuelType">Fuel Type:</label>
      <select id="fuelType" name="fuelType" required>
        <option value="Gasoline">Gasoline</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
      </select>

      <label htmlFor="mileage">Mileage (in kilometers):</label>
      <input type="number" id="mileage" name="mileage" required />

      <label htmlFor="color">Color:</label>
      <input type="text" id="color" name="color" required />

      <label htmlFor="price">Price:</label>
      <input type="number" id="price" name="price" required />

      <label htmlFor="region">Region:</label>
      <input type="text" id="region" name="region" required />

      <label htmlFor="transmissionType">Transmission Type:</label>
      <select id="transmissionType" name="transmissionType" required>
        <option value="Automatic">Automatic</option>
        <option value="Manual">Manual</option>
      </select>

      <label htmlFor="vehicleType">Vehicle Type:</label>
      <input type="text" id="vehicleType" name="vehicleType" required />

      <label htmlFor="contactInformation">Contact Information:</label>
      <input type="text" id="contactInformation" name="contactInformation" required />

      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description" required></textarea>

      <label htmlFor="image">Image:</label>
      <input type="file" id="image" name="image" accept="image/*" required />

      <button type="submit">Create Offer</button>
    </form>
  );
};

export default CreateOffer;
