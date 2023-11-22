import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="page error">
      <div className="error-msg">
        <h2>Woot?!</h2>
        <p className="not-found">Page not found!</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <button className="error-link">HOME</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
