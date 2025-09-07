import { createBrowserRouter } from "react-router-dom";
import App from "../App";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{}],
  },
]);
export default routes;