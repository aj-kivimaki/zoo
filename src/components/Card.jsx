import { Link } from "react-router-dom";

const Card = ({ title, likes, onRemove, addLike, removeLike, category }) => {
  return (
    <div className="card">
      <div className="close-button">
        <button onClick={onRemove} className="material-symbols-outlined">
          close
        </button>
      </div>
      <img
        src={`https://source.unsplash.com/800x800/?${title},${category}`}
        alt="random-pic-unsplash"
      />
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
            <p className={likes >= 0 ? "plus-likes" : "minus-likes"}>{likes}</p>
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
