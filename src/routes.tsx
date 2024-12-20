import { RouteObject } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Canjear from "./components/Canjear/Canjear";
import Mapas from "./components/Mapas/Mapas";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "canjear",
        element: <Canjear />,
      },
      {
        path: "mapas",
        element: <Mapas />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "*", // Fallback for any undefined routes
        element: <ErrorPage />,
      },
    ],
  },
];

export default routes;