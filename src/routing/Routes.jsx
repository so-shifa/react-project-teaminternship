import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import Landing from "../components/Landing";

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
       {
        path: "landing",
        element: <Landing />,
      },
      
  ],
  },
]);

export default routes
