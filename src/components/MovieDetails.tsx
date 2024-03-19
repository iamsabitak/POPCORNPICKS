import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface MovieDetail {
  Title: string;
  Year: string;
  Poster: string;
  Type?: string;
  imdbID: string;
}

const MovieDetails: React.FC = () => {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const { imdbID } = useParams<string>();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=cb2dbd2d&i=${imdbID}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (!movie) {
    return (
      <div style={{ marginLeft: "38rem", marginTop: "10rem" }}>Loading...</div>
    );
  }

  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Year: {movie.Year}</p>
      {movie.Type && <p>Type: {movie.Type}</p>}
    </div>
  );
};

export default MovieDetails;
