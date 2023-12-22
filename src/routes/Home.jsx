import { Link } from "react-router-dom";
import animal from "../images/animal.jpg";
import bird from "../images/bird.jpg";
import fish from "../images/fish.jpg";
import insect from "../images/insect.jpg";

const Home = () => {
  return (
    <div className="front-page">
      <div className="top-row">
        <div className="link-container animals">
          <Link to="/animals">
            <img src={animal} alt="animals" />
            <h2 className="front-page-title">ANIMALS</h2>
          </Link>
        </div>
        <div className="link-container birds">
          <Link to="/birds">
            <img src={bird} alt="birds" />
            <h2 className="front-page-title">BIRDS</h2>
          </Link>
        </div>
      </div>
      <div className="bottom-row">
        <div className="link-container fish">
          <Link to="/fish">
            <img src={fish} alt="fish" />
            <h2 className="front-page-title">FISH</h2>
          </Link>
        </div>
        <div className="link-container insects">
          <Link to="/insects">
            <img src={insect} alt="insects" />
            <h2 className="front-page-title">INSECTS</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
