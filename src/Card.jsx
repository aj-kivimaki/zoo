import { useState } from "react";

const Card = ({ image, title, likes, remove }) => {
  const [count, setCount] = useState(likes);

  function minusCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function plusCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="card">
      <div className="close-button">
        <button onClick={remove} className="material-symbols-outlined">
          close
        </button>
      </div>
      <img src={image} alt="random-pic-unsplash" />
      <div>
        <h2 className="title">{title}</h2>
        <div className="bottom-row">
          <button className="minus-button" onClick={minusCount}>
            <span className="material-symbols-outlined">heart_minus</span>
          </button>
          <div className="likes">
            <span className="material-symbols-outlined">favorite</span>
            <p>{count}</p>
          </div>
          <button className="plus-button" onClick={plusCount}>
            <span className="material-symbols-outlined">heart_plus</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
