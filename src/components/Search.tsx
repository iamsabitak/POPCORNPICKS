import { TextInput } from "@mantine/core";

import React from "react";

const Search: React.FC = () => {
 
  
  return (
    <>
      <TextInput
        placeholder="Search your favourite movie....."
        styles={{
          input: {
            border: "1px solid grey",
            width: "40rem",
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
          },
        }}
      />
    </>
  );
};

export default Search;
