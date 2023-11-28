import React from "react";
import OfferPreview from "../Catalog/OfferPreview";
import ReviewEntity from "./ReviewEntity";
import ReviewForm from "./ReviewForm";

const DealershipPreview = ({
  dealershipInfo,
  currentOffers,
  reviews,
  userReview,
  changeHandler,
  onSubmit,
  isRegularUser,
}) => {
  const { dealershipName, email, location, phoneNumber, workingHours } = dealershipInfo;

  return (
    <div>
      <section>
        <h1>{dealershipName}</h1>
        <div>
          <p>Email: {email}</p>
          <p>Phone Number: {phoneNumber}</p>
          <p>Location: {location}</p>
          <p>Working Hours: {workingHours}</p>
        </div>
      </section>

      <section>
        <h2>Current Offers:</h2>
        {currentOffers.map((offer) => (
          <OfferPreview key={offer._id} {...offer} />
        ))}
      </section>

      <section>
        <h2>Comments</h2>
        <ul>
          {reviews.map((review) => (
            <ReviewEntity key={review._id} review={review} />
          ))}
        </ul>

        {isRegularUser && (
          <ReviewForm onSubmit={onSubmit} userReview={userReview} changeHandler={changeHandler} />
        )}
      </section>
    </div>
  );
};

export default DealershipPreview;
