import React, { useEffect } from "react";

import { Title } from "@mantine/core";

import { useMovieContext } from "../usecontext/useMovieContext";

import MovieCard from "./Moviecard";

const Movie: React.FC<{ query: string }> = () => {
  const { query, setMovies, loading, setLoading, error, setError } =
    useMovieContext();

 useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=cb2dbd2d&s=${query}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
          console.log("rendered-movie");
          setError(null);
        } else {
          setMovies([]);
          setError("No movies found");
        }
      } catch (error) {
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchData();
    } else {
      setMovies([]);
    }
  }, [query, setError, setLoading, setMovies]);

  return (
    <>
      <Title style={{ textAlign: "center", color: "#08e408" }}>
        POPCORNPICKS - MOVIES
      </Title>
      {loading && (
        <div style={{ textAlign: "center", marginTop: "10rem" }}>
          Loading...
        </div>
      )}
      {error && (
        <div style={{ textAlign: "center", marginTop: "10rem" }}>
          Error: {error}
        </div>
      )}
      <>
        <MovieCard />
      </>
    </>
  );
};

export default Movie;
