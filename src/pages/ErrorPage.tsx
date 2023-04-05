import { useRouteError } from "react-router-dom";
import { ErrorPageDef } from "../utils/error";

const ErrorPage = () => {
  const error = useRouteError() as ErrorPageDef | undefined;

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error && (
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      )}
    </div>
  );
};

export default ErrorPage;
