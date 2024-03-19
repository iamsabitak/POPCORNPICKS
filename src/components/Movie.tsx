import React, { useEffect, useState } from "react";
import { Card, Image, Title } from "@mantine/core";

interface MState {
  Title: string;
  Year: number;
  Poster: string;
  Type?: string;
  imdbID: string;
}

const Movie: React.FC = () => {
  const [movies, setMovies] = useState<MState[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://www.omdbapi.com/?apikey=cb2dbd2d&s=doraemon"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data.Search);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ textAlign: "center" }}>Error: {error}</div>;
  }

  return (
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
        {movies.map((item, index) => {
          const { Title, Type, Year, Poster, imdbID } = item;
          return (
            <Card
              key={imdbID || index}
              style={{
                width: "250px",
                textAlign: "center",
                margin: "10px",
                backgroundColor: "#151313",
                borderRadius: "10px",
              }}
            >
              <Image
                src={Poster}
                alt={Title}
                style={{
                  marginBottom: "10px",
                  width: "250px",
                  height: "300px", // Set a fixed height for the image
                  objectFit: "cover", // Maintain aspect ratio while covering the area
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                }}
              />
              <h3>{Title}</h3>
              {Type && <p>{Type}</p>}
              <p>{Year}</p>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Movie;
