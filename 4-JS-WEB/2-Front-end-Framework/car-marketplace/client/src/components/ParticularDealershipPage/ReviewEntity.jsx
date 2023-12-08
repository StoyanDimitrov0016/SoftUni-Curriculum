import React from 'react';

const ReviewEntity = ({ review }) => {
  const { stars, comment, firstName, lastName } = review;
  return (
    <div>
      <div>
        <p>{`${firstName} ${lastName}`}</p>
        <p>{`Stars: ${stars}`}</p>
      </div>
      <div>
        {comment}
      </div>
    </div>
  );
};

export default ReviewEntity;
