import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../modules/Navbar";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes path="/">
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
