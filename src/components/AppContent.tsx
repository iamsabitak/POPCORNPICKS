import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Movie from "./Movie";

import Navbar from "./Navbar";
import MovieDetails from "./MovieDetails";
import { useMovieContext } from "../usecontext/useMovieContext";

const AppContent: React.FC = () => {
  const { query } = useMovieContext();
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Movie query={query} />} />
          <Route path="/movies/:imdbID" element={<MovieDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppContent;
