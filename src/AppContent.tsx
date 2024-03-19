import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Movie from "./components/Movie";
import Home from "./components/Home";

const AppContent: React.FC = () => {
  return (
    <>
      <h1>POPCORNPICKS - AppContent</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppContent;
