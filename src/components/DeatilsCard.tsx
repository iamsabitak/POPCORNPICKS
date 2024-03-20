import React from "react";

import { Button, Card, Image } from "@mantine/core";

import { Link } from "react-router-dom";
import { useMovieContext } from "../usecontext/useMovieContext";

const DetailsCard: React.FC = () => {
  const { moviesDetails } = useMovieContext();
  if (!moviesDetails) {
    return (
      <div style={{ textAlign: "center", marginTop: "10rem" }}>Loading...</div>
    );
  }
  return (
    <>
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
    </>
  );
};
export default DetailsCard;
