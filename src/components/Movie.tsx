import React, { useState } from "react";
import { Card, Image, Title } from "@mantine/core";
interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Type?: string;
  imdbID: string;
}

const Movie: React.FC<{ query: string }> = ({ query }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
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
  }, [query]);

  return (
    <>
      {loading && (
        <div style={{ marginLeft: "35rem", marginTop: "10rem" }}>
          Loading...
        </div>
      )}
      {error && (
        <div style={{ marginLeft: "30rem", marginTop: "10rem" }}>
          Error: {error}
        </div>
      )}
      {movies.length > 0 && (
        <>
          <Title style={{ textAlign: "center" }}>POPCORNPICKS - MOVIES</Title>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            {movies.map((movie) => (
              <Card
                key={movie.imdbID}
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
                    height: "300px",
                    objectFit: "cover",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                  }}
                />
                <h3>{movie.Title}</h3>
                {movie.Type && <p>{movie.Type}</p>}
                <p>{movie.Year}</p>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Movie;
