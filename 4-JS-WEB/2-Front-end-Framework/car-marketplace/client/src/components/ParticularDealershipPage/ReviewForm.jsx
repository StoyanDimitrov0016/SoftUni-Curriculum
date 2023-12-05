const ReviewForm = ({ onSubmit, userReview, changeHandler }) => {
  console.log(userReview);
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="stars">Stars:</label>
        <input
          type="number"
          id="stars"
          name="stars"
          min="1"
          max="5"
          value={userReview.stars || ''}
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
  );
};

export default ReviewForm;
