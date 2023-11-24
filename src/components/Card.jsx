import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const Card = ({ title, likes, onRemove, addLike, removeLike, category }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <div className="card">
      <div className="close-button">
        <button onClick={onRemove} className="material-symbols-outlined">
          close
        </button>
      </div>
      {loading ? (
        <Skeleton className="img-skeleton" />
      ) : (
        <img
          src={`https://source.unsplash.com/800x800/?${title},${category}`}
          alt="random-pic-unsplash"
        />
      )}
      <div>
        <h2 className="title">{title}</h2>
        <div className="middle-row">
          <button className="minus-button" onClick={removeLike}>
            <span className="material-symbols-outlined">heart_minus</span>
          </button>
          <div className="likes">
            <span className="material-symbols-outlined">
              {likes >= 0 ? "favorite" : "heart_broken"}
            </span>
            <p>{likes}</p>
          </div>
          <button className="plus-button" onClick={addLike}>
            <span className="material-symbols-outlined">heart_plus</span>
          </button>
        </div>
      </div>
      <div className="see-more">
        <Link to={title.toLowerCase()}>SEE MORE</Link>
      </div>
    </div>
  );
};

export default Card;
