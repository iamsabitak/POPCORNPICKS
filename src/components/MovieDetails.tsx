import React, { useEffect } from "react";
import { Button, Card, Image, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMovieContext } from "../usecontex/useMovieContext";

const MovieDetails: React.FC = () => {
  const { moviesDetails, setMoviesDetails } = useMovieContext();
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
        setMoviesDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [imdbID, setMoviesDetails, moviesDetails]);

  if (!moviesDetails) {
    return (
      <div style={{ textAlign: "center", marginTop: "10rem" }}>Loading...</div>
    );
  }

  return (
    <>
      <Title style={{ textAlign: "center", color: "#08e408" }}>
        MOVIES-DETAILS
      </Title>
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
            src={
              moviesDetails.Poster === "N/A"
                ? "https://i.pinimg.com/originals/a0/32/26/a032267e74bb6f550adbd7821991ae70.jpg"
                : moviesDetails.Poster
            }
            alt={moviesDetails.Title}
            style={{
              marginBottom: "10px",
              width: "250px",
              height: "250px",
              objectFit: "cover",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
          />
          <h3>
            {moviesDetails.Title.length > 15
              ? `${moviesDetails.Title.substring(0, 16)}...`
              : moviesDetails.Title}
          </h3>
          <h4>Year: {moviesDetails.Year}</h4>
          {moviesDetails.Type && <h4>Type: {moviesDetails.Type}</h4>}
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
    </>
  );
};

export default MovieDetails;
