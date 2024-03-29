import React, { useRef } from "react";
import { TextInput } from "@mantine/core";

import { useMovieContext } from "../usecontext/useMovieContext";

const Search: React.FC = () => {
  const { query, setQuery } = useMovieContext();
  const inputEl = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <TextInput
      ref={inputEl}
      type="text"
      placeholder="Search your favorite movie..."
      onChange={handleChange}
      value={query}
      styles={{
        input: {
          border: "1px solid grey",
          width: "48rem",
          height: "2.5rem",
          fontSize: "1rem",
          borderRadius: "5px",
          marginTop: "15px",
          marginBottom: "15px",
          textAlign: "center",
          backgroundColor: "#1c1c1c",
          color: "#fff",
          WebkitTextFillColor: "#fff",
          fontFamily: "Courier, monospace",
          marginRight: "6rem",
        },
      }}
    />
  );
};

export default Search;
