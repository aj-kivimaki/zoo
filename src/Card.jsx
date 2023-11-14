const Card = ({ title, onRemove, likes, addLike, removeLike }) => {
  return (
    <div className="card">
      <div className="close-button">
        <button onClick={onRemove} className="material-symbols-outlined">
          close
        </button>
      </div>
      <img
        src={`https://source.unsplash.com/400x400/?${title}`}
        alt="random-pic-unsplash"
      />
      <div>
        <h2 className="title">{title}</h2>
        <div className="bottom-row">
          <button className="minus-button" onClick={removeLike}>
            <span className="material-symbols-outlined">heart_minus</span>
          </button>
          <div className="likes">
            <span className="material-symbols-outlined">
              {likes >= 0 ? "favorite" : "heart_broken"}
            </span>
            <p className={likes >= 0 ? "plus-likes" : "minus-likes"}>{likes}</p>
          </div>
          <button className="plus-button" onClick={addLike}>
            <span className="material-symbols-outlined">heart_plus</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
