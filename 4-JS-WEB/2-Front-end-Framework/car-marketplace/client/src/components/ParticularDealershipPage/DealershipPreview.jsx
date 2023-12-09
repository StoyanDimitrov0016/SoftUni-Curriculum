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
    <section className="dealership-wrapper">
      <article className="dealer-info">
        <h1>{dealershipName}</h1>
        <div className="dealership-credentials">
          <p>
            <span>Email:</span>
            {email}
          </p>
          <p>
            <span>Phone Number:</span>
            {phoneNumber}
          </p>
          <p>
            <span>Location:</span>
            {location}
          </p>
          <p>
            <span>Working Hours:</span> {workingHours}
          </p>
        </div>
      </article>

      <article className="dealer-offers">
        <h2>Current Offers:</h2>
        <div className="offer-container">
          {currentOffers.map((offer) => (
            <OfferPreview key={offer._id} {...offer} />
          ))}
        </div>
      </article>

      <article className="reviews">
        <h2>Comments</h2>
        <ul className="comments-list">
          {reviews.map((review) => (
            <ReviewEntity key={review._id} review={review} />
          ))}
        </ul>

        {isRegularUser && (
          <ReviewForm onSubmit={onSubmit} userReview={userReview} changeHandler={changeHandler} />
        )}
      </article>
    </section>
  );
};

export default DealershipPreview;
