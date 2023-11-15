import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="page error">
      <div className="error-msg">
        <h2>Woot?!</h2>
        <p>{error.statusText || error.message}</p>
      </div>
    </div>
  );
};

export default Error;
