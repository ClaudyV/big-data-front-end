import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Results from "../pages/Results";
import App from "../App";

const Router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "results/:populationId/householdId/sexId",
            element: <Results />,
          },
        ],
      },
    ],
  },
]);

export default Router;
