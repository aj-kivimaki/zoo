import { Link } from "react-router-dom";
import animal from "../images/animal.jpg";
import bird from "../images/bird.jpg";

const Home = () => {
  return (
    <div className="front-page">
      <div className="left">
        <img src={animal} alt="animals" />
        <h2 className="front-page-title">
          <Link to="/animals">ANIMALS</Link>
        </h2>
      </div>
      <div className="right">
        <img src={bird} alt="birds" />
        <h2 className="front-page-title">
          <Link to="/birds">BIRDS</Link>
        </h2>
      </div>
    </div>
  );
};

export default Home;
