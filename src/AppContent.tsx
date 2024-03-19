import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Movie from "./components/Movie";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const AppContent: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppContent;
