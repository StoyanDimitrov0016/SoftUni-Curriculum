import React from "react";

const Details = () => {
  return (
    <div className="details-container">
      <div className="car-image">
        <img
          src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2018/bmw-m3-e46/bmw-e46-m3-coup%C3%A9-double-image-background.jpg"
          alt="Car 1"
        />
      </div>
      <div className="car-properties">
        <h2>Car Make and Model 1</h2>
        <p>Year: 20XX</p>
        <p>Price: $XX,XXX</p>
        <p>City: Example City</p>
        <p>Fuel Type: Petrol</p>
        <p>Mileage: 50,000 miles</p>
      </div>
    </div>
  );
};

export default Details;
