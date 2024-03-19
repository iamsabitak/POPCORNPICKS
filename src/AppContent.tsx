import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Movie from "./components/Movie";

import Navbar from "./components/Navbar";
import MovieDetails from "./components/MovieDetails";

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
