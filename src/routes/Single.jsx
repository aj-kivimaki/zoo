import { useParams, useNavigate } from "react-router-dom";

const Single = ({ categoryArray, category }) => {
  const params = useParams();
  const title = params[category];
  const data = categoryArray.find((creature) => creature.name === title);

  const navigate = useNavigate();

  return (
    <div className="single page">
      <img
        src={`https://source.unsplash.com/800x800/?${title},${category}`}
        alt="random-pic-unsplash"
      />
      <div className="info">
        <button
          onClick={() => navigate(-1)}
          className="material-symbols-outlined navigate-back"
        >
          close
        </button>
        <div className="title">
          <h2>{data.name}</h2>
        </div>
        <div className="likes">
          <span className="material-symbols-outlined">favorite</span>
          <span className="number">{data.likes}</span>
        </div>
      </div>
    </div>
  );
};
export default Single;
