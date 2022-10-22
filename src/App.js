import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Order from "./components/Order/Order";
import Shop from "./components/Shop/Shop";
import Main from "./Layout/Main";
import { loadProduct_cart } from "./Loader/loadProduct_cart";

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
