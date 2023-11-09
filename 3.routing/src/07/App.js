import React from "react";
//import { BrowserRouter as Router } from "react-router-dom";
//import { Routes, Route } from "react-router";

import { SiteLayout } from "./layout";

import Main from "./component/Main";
import Guestbook from "./component/Guestbook";
import About from "./component/About";
import { Gallery } from "./component/gallery";
import { Login, Join } from "./component/user";

import useRoutes from "react-router";

import Error from "./component/error/Error";
import Error404 from "./component/error/Error404";

import "./assets/scss/App.scss";

export default function App() {
  return useRoutes([
    {
      path: "/",
      element: <SiteLayout />,
      children: [
        { path: "/", element: <Main /> },
        { path: "gallery", element: <Gallery /> },
        { path: "guestbook", element: <Guestbook /> },
        { path: "about", element: <About /> },
        { path: "user/join", element: <Join /> },
        { path: "user/login", element: <Login /> },
        { path: "error", element: <Error /> },
        { path: "*", element: <Error404 /> },
      ],
    },
  ]);
}
