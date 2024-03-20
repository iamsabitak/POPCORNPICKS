import React, { useEffect, useCallback, useState } from "react";
import { Title, Loader } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useMovieContext } from "../usecontext/useMovieContext";
import DetailsCard from "./DeatilsCard";

const MovieDetails: React.FC = () => {
  const { setMoviesDetails } = useMovieContext();
  const { imdbID } = useParams<{ imdbID: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovieDetails = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=cb2dbd2d&i=${imdbID}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMoviesDetails(data);
      console.log("rendered-detail");
    } catch (error) {
      setError("Error fetching movie details. Please try again later.");
      console.error("Error fetching movie details:", error);
    } finally {
      setLoading(false);
    }
  }, [imdbID, setMoviesDetails]);

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  return (
    <>
      <Title style={{ textAlign: "center", color: "#08e408" }}>
        MOVIES-DETAILS
      </Title>
      {loading && <Loader />}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <DetailsCard />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
