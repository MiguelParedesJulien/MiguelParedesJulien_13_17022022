import Error from "pages/error/Error";
import { ENV_MODE } from "utils/constants/constants";
import Homepage from "pages/homepage/Homepage";
import Login from "pages/login/Login";
import Profile from "pages/profile/Profile";
import SwaggerApiDoc from "components/swaggerApiDoc/SwaggerApiDoc";

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
    path: "/user/profile",
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

export const routesApiDocs = () => {
  // Swagger warning disable
  console.warn = () => {};

  // Push API route in dev mode
  if (ENV_MODE !== "production") {
    routes.unshift({
      path: "/api-docs",
      exact: true,
      component: SwaggerApiDoc,
    });
  }
};
