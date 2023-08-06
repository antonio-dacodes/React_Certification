import { Routes } from "../navigation/rute";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const routes: Routes[] = [
  {
    exact: true,
    path: "/React_Certification",
    component: Login,
  },
  {
    exact: true,
    path: "/movies",
    component: Home,
  },
];
