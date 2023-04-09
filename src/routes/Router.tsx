import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Results from "../pages/Results";

const Router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/:year/:county/:district",
        element: <Home />,
      },
    ],
  },
]);

export default Router;
