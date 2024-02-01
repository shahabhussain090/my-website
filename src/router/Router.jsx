import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import RecentWork from "../Pages/RecentWork";
import RootLayout from "../components/Layout/RootLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recent" element={<RecentWork />} />
    </Route>
  )
);
