import React, { useEffect } from "react";

const Movie: React.FC = () => {
  
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
        console.log(data.Search);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>POPCORNPICKS - MOVIE</h1>
    </>
  );
};

export default Movie;
