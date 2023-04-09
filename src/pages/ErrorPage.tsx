import { useNavigate, useRouteError } from "react-router-dom";
import { ErrorPageDef } from "../utils/error";
import './../styles/ErrorPage.css'

const ErrorPage = () => {
  const error = useRouteError() as ErrorPageDef | undefined;
  const navigate = useNavigate()

  return (
    <div className="error-page-wrapper">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error && (
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      )}
      <button  onClick={()=> navigate('/')}>
        Return to Home page
      </button>
    </div>
  );
};

export default ErrorPage;
