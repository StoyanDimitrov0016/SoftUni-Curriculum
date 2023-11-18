import React from "react";
import OfferPreview from "../Catalog/OfferPreview";
import ReviewEntity from "./ReviewEntity";

const DealershipPreview = ({
  dealershipInfo,
  currentOffers,
  reviews,
  userReview,
  changeHandler,
  submit,
  handleCommentChange,
  handleCommentSubmit,
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

        {/* Write a comment section */}
        <form onSubmit={submit}>
          <div>
            <label htmlFor="stars">Stars:</label>
            <input
              type="number"
              id="stars"
              name="stars"
              min="1"
              max="5"
              value={userReview.star}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              placeholder="Write your comment..."
              value={userReview.comment}
              onChange={changeHandler}
            />
          </div>
          <button type="submit">Submit Comment</button>
        </form>
      </section>
    </div>
  );
};

export default DealershipPreview;
