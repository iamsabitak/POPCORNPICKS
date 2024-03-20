import React, { useEffect } from "react";

import { Title } from "@mantine/core";

import { useParams } from "react-router-dom";

import { useMovieContext } from "../usecontext/useMovieContext";
import DetailsCard from "./DeatilsCard";

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

  return (
    <>
      <Title style={{ textAlign: "center", color: "#08e408" }}>
        MOVIES-DETAILS
      </Title>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <DetailsCard />
      </div>
    </>
  );
};

export default MovieDetails;
