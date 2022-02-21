import Error from "pages/ErrorPage/Error";
import HomePage from "pages/HomePage/Homepage";
import Login from "pages/LoginPage/Login";
import Profile from "pages/ProfilePage/Profile";

export const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
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
