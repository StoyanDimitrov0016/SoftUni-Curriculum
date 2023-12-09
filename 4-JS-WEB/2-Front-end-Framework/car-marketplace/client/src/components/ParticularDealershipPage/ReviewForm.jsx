const ReviewForm = ({ onSubmit, userReview, changeHandler }) => {
  return (
    <form className="review-form" onSubmit={onSubmit}>
      <div className="review-stars-wrapper">
        <label  htmlFor="stars">Stars:</label>
        <input
        className="review-stars"
          type="number"
          id="stars"
          name="stars"
          min="1"
          max="5"
          value={userReview.stars || ''}
          onChange={changeHandler}
        />
      </div>
      <div className="submit-review-wrapper">
        <label htmlFor="comment">Comment:</label>
        <textarea
        className="review-textarea"
          id="comment"
          name="comment"
          placeholder="Write your comment..."
          value={userReview.comment}
          onChange={changeHandler}
        />
      </div>
      <button className="dealership-btn" type="submit">Submit Comment</button>
    </form>
  );
};

export default ReviewForm;
