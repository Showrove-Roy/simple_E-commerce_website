import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Order from "./components/Order/Order";
import Shop from "./components/Shop/Shop";
import Main from "./Layout/Main";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
        element: <Shop></Shop>
        },
        {
           path: 'shop',
        element: <Shop></Shop>
        },
        {
          path: 'order',
          element: <Order></Order>
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
