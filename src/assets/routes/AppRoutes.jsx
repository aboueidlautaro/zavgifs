import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../modules/Navbar";
import ArticlePage from "../pages/ArticlePage";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SearchPage from "../pages/SearchPage";

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="search/:search" element={<SearchPage />} />
        <Route path="article/:id" element={<ArticlePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
