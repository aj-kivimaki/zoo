import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="links">
      <ul>
        <li>
          <Link to="/animals">Animals</Link>
        </li>
        <li>
          <Link to="/birds">Birds</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Links;
