import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Movie from "./Movie";

import Navbar from "./Navbar";
import MovieDetails from "./MovieDetails";

const AppContent: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Movie query="pokemon" />} />
          <Route path="/movies/:imdbID" element={<MovieDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppContent;
