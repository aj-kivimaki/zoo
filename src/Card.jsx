const Card = (props) => {
  return (
    <div className="card">
      <div className="close-button">X</div>
      <img src={props.image} alt="random-pic-unsplash" />
      <div className="info">
        <h2 className="title">{props.title}</h2>
        <div className="bottom-row">
          <div className="minus-button">
            <span className="material-symbols-outlined">remove</span>
          </div>
          <div className="likes">0</div>
          <div className="plus-button">
            <span className="material-symbols-outlined">add</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
