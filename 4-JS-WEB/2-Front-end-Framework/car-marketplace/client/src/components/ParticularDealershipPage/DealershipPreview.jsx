import React from "react";
import OfferPreview from "../Catalog/OfferPreview";

const DealershipPreview = ({
  dealershipInfo,
  currentOffers,
  reviews,
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
          {/* Render comments based on the received data */}
          {/* {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.text}</p>
            </li>
          ))} */}
        </ul>

        {/* Write a comment section */}
        <textarea placeholder="Write your comment..." onChange={handleCommentChange} />
        <button onClick={handleCommentSubmit}>Submit Comment</button>
      </section>
    </div>
  );
};

export default DealershipPreview;
