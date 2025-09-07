import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../components/Signup";
import Signin from "../components/Signin";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index:true,
        element:<Signup/>
      },
      {
        path:"Signin",
        element:<Signin/>
      },
      
  ],
  },
]);

export default routes
