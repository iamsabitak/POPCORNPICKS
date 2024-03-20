import React, { useEffect, useState } from "react";
import { Button, Card, Image} from "@mantine/core";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
interface MovieDetail {
  Title: string;
  Year: string;
  Poster: string;
  Type?: string;
  imdbID: string;
}

const MovieDetails: React.FC = () => {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const { imdbID } = useParams<{ imdbID: string }>();

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
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
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
          src={movie.Poster}
          alt={movie.Title}
          style={{
            marginBottom: "10px",
            width: "250px",
            height: "250px",
            objectFit: "cover",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
        />
        {movie.Title.length > 15 ? `${movie.Title.substring(0, 16)}...` : movie.Title}
        <p>Year: {movie.Year}</p>
        {movie.Type && <p>Type: {movie.Type}</p>}
        <Link to="/" style={{ textDecoration: "none" }}>
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
            Go Back
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default MovieDetails;
