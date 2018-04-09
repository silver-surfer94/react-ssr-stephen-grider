import React from "react";

import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import AdminsListPage from "./pages/AdminsListPage";
import NotFoundPage from "./pages/NotFoundPage";
import App from "./App";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...UsersListPage,
        path: "/users",
        exact: true
      },
      {
        ...AdminsListPage,
        path: "/admins",
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
