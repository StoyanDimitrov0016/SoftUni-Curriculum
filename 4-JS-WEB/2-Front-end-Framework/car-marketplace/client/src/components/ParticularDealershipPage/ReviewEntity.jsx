import React from 'react';

const ReviewEntity = ({ review }) => {
  const { stars, comment, firstName, lastName } = review;
  return (
    <div className='user-review'>
      <div className='user-feedback'>
        <p>{`${firstName} ${lastName}`}</p>
        <p>{`Stars: ${stars}`}</p>
      </div>
      <div className='user-content'>
        {comment}
      </div>
    </div>
  );
};

export default ReviewEntity;
