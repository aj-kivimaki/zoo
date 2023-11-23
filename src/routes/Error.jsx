import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="page error">
      <div className="error-msg">
        <h2>?!?!?!</h2>
        <p className="not-found">There&#39;s nothing in here</p>
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
