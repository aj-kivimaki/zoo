import { useState } from "react";

const Card = ({ title, likes, remove }) => {
  const [count, setCount] = useState(likes);

  function counter(value) {
    value === 1
      ? setCount((prevCount) => prevCount + 1)
      : setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="card">
      <div className="close-button">
        <button onClick={remove} className="material-symbols-outlined">
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
          <button className="minus-button" onClick={() => counter(-1)}>
            <span className="material-symbols-outlined">heart_minus</span>
          </button>
          <div className="likes">
            <span className="material-symbols-outlined">
              {count >= 0 ? "favorite" : "heart_broken"}
            </span>
            <p className={count > 0 ? "plus-likes" : "minus-likes"}>{count}</p>
          </div>
          <button className="plus-button" onClick={() => counter(1)}>
            <span className="material-symbols-outlined">heart_plus</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
