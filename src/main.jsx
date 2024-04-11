/* eslint-disable react-refresh/only-export-components */
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Body from "./components/Body/Body.jsx";
// import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu.jsx";
import Error from "./pages/Error";
import Help from "./pages/Help.jsx";
import SignIn from "./pages/SignIn.jsx";
import Cart from "./pages/Cart.jsx";
import ThankYou from "./pages/ThankYou .jsx";
import "./index.css";
// import ShimmerHome from "./components/ShimmerHome/ShimmerHome.jsx";
import ShimmerMenu from "./components/ShimmerMenu/ShimmerMenu.jsx";

// const Body = lazy(() => import("./components/Body/Body.jsx"));
const RestaurantMenu = lazy(() =>
  import("./components/RestaurantMenu/RestaurantMenu.jsx")
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={ShimmerMenu}>
            <RestaurantMenu />,
          </Suspense>
        ),
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/thankyou",
        element: <ThankYou />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
