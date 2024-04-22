import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart";

import SignIn from "./components/SignIn";
import Help from "./components/Help";
import Search from "./components/Search";
import Home from "./components/Home";
import Error from "./components/Error";
import Offers from "./components/Offers.jsx";
import RestaurantsMenu from "./components/RestaurantsMenu.jsx";
import { Provider } from "react-redux";
import appStore from "./store/appStore.js";
import SuccessfullOrder from "./components/SuccessfullOrder.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/successfull",
        element: <SuccessfullOrder />,
      },
      {
        path: "/restaurants/:restaurantId",
        element: <RestaurantsMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
