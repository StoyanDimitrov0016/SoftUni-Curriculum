import React from 'react';

const ReviewEntity = ({ review }) => {
  const { stars, comments, firstName, lastName } = review;

  return (
    <div>
      <div>
        <p>{`${firstName} ${lastName}`}</p>
        <p>{`Stars: ${stars}`}</p>
      </div>
      <div>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
};

export default ReviewEntity;
