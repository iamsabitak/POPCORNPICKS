import React, { createContext, ReactNode, useState } from "react";

export interface MovieContextType {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [query, setQuery] = useState<string>("pokemon");

  const contextValue: MovieContextType = {
    query,
    setQuery,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext };
