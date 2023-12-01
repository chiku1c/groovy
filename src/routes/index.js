import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const ExtraDetails = lazy(() => import("../pages/ExtraDetails"));

export const RouteList = [
  {
    title: "home",
    path: "/",
    element: Home,
  },
  {
    title: "extradetails",
    path: "/extradetails",
    element: ExtraDetails,
  },
];
