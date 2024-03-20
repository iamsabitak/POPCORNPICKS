import React, { createContext, ReactNode, useState } from "react";

export interface MovieContextType {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  moviesDetails: Movie | null;
  setMoviesDetails: React.Dispatch<React.SetStateAction<Movie | null>>;
}

export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Type?: string;
  imdbID: string;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [query, setQuery] = useState<string>("pokemon");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [moviesDetails, setMoviesDetails] = useState<Movie | null>(null);

  const contextValue: MovieContextType = {
    query,
    setQuery,
    movies,
    setMovies,
    loading,
    setLoading,
    error,
    setError,
    moviesDetails,
    setMoviesDetails,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext };
