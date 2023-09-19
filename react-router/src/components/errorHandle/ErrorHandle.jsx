import { Link, useRouteError } from "react-router-dom";

const ErrorHandle = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorHandle;
