import Error from "pages/error/Error";
import Homepage from "pages/homepage/Homepage";
import Login from "pages/login/Login";
import Profile from "pages/profile/Profile";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Homepage,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/profile",
    exact: true,
    component: Profile,
    private: true,
  },
  {
    path: "*",
    exact: false,
    component: Error,
  },
];
