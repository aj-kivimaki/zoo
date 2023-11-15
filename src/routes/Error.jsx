import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="page">
      <h2>S*** happens</h2>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default Error;
