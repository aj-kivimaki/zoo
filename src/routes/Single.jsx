import { useParams, useNavigate } from "react-router-dom";

const Single = ({ zoo }) => {
  const navigate = useNavigate();
  const params = useParams();
  const category = params.category;
  const title = params.name;
  const data = zoo[category].find((elem) => elem.name.toLowerCase() === title);

  return (
    <div className="single-wrap">
      <div className="single page">
        <img
          src={`https://source.unsplash.com/800x800/?${title},${category}`}
          alt="random-pic-unsplash"
        />
        <div className="info">
          <div className="title">
            <h2>{data.name}</h2>
          </div>
          <div className="likes">
            <span className="material-symbols-outlined">favorite</span>
            <span className="number">{data.likes}</span>
          </div>
          <div className="navigate-back-wrap">
            <button onClick={() => navigate(-1)} className="navigate-back">
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Single;
