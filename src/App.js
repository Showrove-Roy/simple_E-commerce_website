import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import Shipping from "./components/Shipping/Shipping";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/Sign Up/SignUp";
import Main from "./Layout/Main";
import { loadProduct_cart } from "./Loader/loadProduct_cart";
import PrivateRouter from "./Router/PrivateRouter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: loadProduct_cart,
          element: <Shop></Shop>,
        },
        {
          path: "order",
          loader: loadProduct_cart,
          element: <Order></Order>,
        },
        {
          path: "shipping",
          loader: loadProduct_cart,
          element: (
            <PrivateRouter>
              <Shipping></Shipping>
            </PrivateRouter>
          ),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "*",
          element: (
            <div style={{ width: "30rem", margin: "auto" }}>
              <h3>404 Error</h3>
              <h4>This Page is not found</h4>
            </div>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
