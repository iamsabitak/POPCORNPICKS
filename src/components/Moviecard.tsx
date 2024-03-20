import React from "react";

import { Button, Card, Image } from "@mantine/core";

import { useMovieContext } from "../usecontext/useMovieContext";

import { Link } from "react-router-dom";

const MovieCard: React.FC = () => {
  const { movies } = useMovieContext();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {movies.map((movie) => {
        const movieTitle = movie.Title.substring(0, 16);
        return (
          <div key={movie.imdbID}>
            <Card
              style={{
                width: "250px",
                textAlign: "center",
                margin: "10px",
                backgroundColor: "#151313",
                borderRadius: "10px",
              }}
            >
              <Image
                src={
                  movie.Poster === "N/A"
                    ? "https://i.pinimg.com/originals/a0/32/26/a032267e74bb6f550adbd7821991ae70.jpg"
                    : movie.Poster
                }
                alt={movieTitle}
                style={{
                  marginBottom: "10px",
                  width: "250px",
                  height: "300px",
                  objectFit: "cover",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                }}
              />
              <h3>
                {" "}
                {movieTitle.length > 15 ? `${movieTitle}...` : movieTitle}
              </h3>
              <Link key={movie.imdbID} to={`/movies/${movie.imdbID}`}>
                <Button
                  style={{
                    color: "#fff",
                    cursor: "pointer",
                    border: "1px solid #08e408",
                    backgroundColor: "#08e408",
                    borderRadius: "4px",
                    height: "2rem",
                    width: "5rem",
                    marginBottom: "1rem",
                  }}
                >
                  Details
                </Button>
              </Link>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
export default MovieCard;
