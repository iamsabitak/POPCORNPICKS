import React, { useEffect, useState } from "react";

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>POPCORNPICKS - MOVIE</h1>
      {movies.map((item, index) => {
        const { Title, Type, Year, Poster, imdbID } = item;
        return (
          <div key={imdbID || index}>
            <img src={Poster} alt={Title} />
            <li>{Title}</li>
            {Type && <li>{Type}</li>}
            <li>{Year}</li>
          </div>
        );
      })}
    </>
  );
};

export default Movie;
