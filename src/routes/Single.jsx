import Skeleton from "react-loading-skeleton";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Single = ({ zoo }) => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const params = useParams();
  const category = params.category;
  const title = params.name;
  const data = zoo[category].find((elem) => elem.name.toLowerCase() === title);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <div className="single-wrap">
      <div className="single page">
        {loading ? (
          <Skeleton className="img-skeleton" />
        ) : (
          <img
            src={`https://source.unsplash.com/800x800/?${title},${category}`}
            alt="random-pic-unsplash"
          />
        )}
        <div className="info">
          <div className="title">
            <h2>{data.name}</h2>
          </div>
          <div className="likes">
            <span className="material-symbols-outlined">
              {data.likes >= 0 ? "favorite" : "heart_broken"}
            </span>
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
